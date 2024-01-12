import React, { useEffect, useState } from 'react'
import db, { auth } from '../../firebase'
import { addDoc, collection, doc, onSnapshot } from 'firebase/firestore'
import { Box, Button, Fab, fabClasses } from '@mui/material'
import { onAuthStateChanged } from 'firebase/auth'
import OutlinedCard from '../OutlinedCard'
import { Add } from '@mui/icons-material'
import AddCourseModal from '../AddCourseModal'

const Courses = () => {
  const [courses,setCourses] = useState([{name:'Loading...'}])
  const [user,setUser] = useState();
  auth.onAuthStateChanged(user=>{
    if(user) {setUser(user)};
  })
  const handleNewCourse = async() =>{
    const name = prompt('Enter course Name!');

    const collectionRef = collection(db,'courses');
    const payload = {name:name, rating:5, user: user.displayName  }
    await addDoc(collectionRef,payload)
  }
  useEffect(
    ()=>
    onSnapshot(collection(db,'courses'),(snapshot)=>
      setCourses(snapshot.docs.map((doc)=> ({...doc.data(),id:doc.id})))
    ),[]
  )

  const fabStyle = {
    position: 'fixed',
    bottom: 16,
    right: 16,
  };
  
  return (
    <div >
      <dialog open id="modal" className="modal">
  <button id="closeModal" className="modal-close-btn">Close</button>
  <p>...</p>
</dialog>
      <Fab color="primary" aria-label="add" sx={fabStyle}>
        <Add/>
      </Fab>
      <Box sx={{display:'flex', flexDirection:'column'}}>
      {
      courses.map((course)=>(
                    <OutlinedCard key={course.id} title={course.name} user={course.user} description={course.description} rating={course.rating} date={course.date}></OutlinedCard>     

      ))
      }
      </Box>
      </div>
  )
}

export default Courses