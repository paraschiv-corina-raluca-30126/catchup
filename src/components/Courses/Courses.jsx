import React, { useEffect, useState } from 'react'
import db, { auth } from '../../firebase'
import { addDoc, collection, doc, onSnapshot } from 'firebase/firestore'
import { Button } from '@mui/material'
import { onAuthStateChanged } from 'firebase/auth'
import OutlinedCard from '../OutlinedCard'
const Courses = () => {
  const [courses,setCourses] = useState([{name:'Loading...'}])
  const [user,setUser] = useState();
  auth.onAuthStateChanged(user=>{
    if(user) {setUser(user)};
  })
  const handleNewCourse = async() =>{
    const name = prompt('Enter course Name!');

    const collectionRef = collection(db,'courses');
    const payload = {name:name, rating:5, no: {username:user.displayName, photo: user.photoURL}  }
    await addDoc(collectionRef,payload)
  }
  useEffect(
    ()=>
    onSnapshot(collection(db,'courses'),(snapshot)=>
      setCourses(snapshot.docs.map((doc)=> ({...doc.data(),id:doc.id})))
    ),[]
  )
  console.log(courses);
  return (
    <div>
      <Button onClick={handleNewCourse}>Add la curs</Button>
      <OutlinedCard></OutlinedCard>     
      {
      courses.map((course)=>(
      <li key={course.id}>{course.name} &nbsp;&nbsp;&nbsp;{course.rating}&nbsp;&nbsp;&nbsp; Added by: </li>  
      ))
      }</div>
  )
}

export default Courses