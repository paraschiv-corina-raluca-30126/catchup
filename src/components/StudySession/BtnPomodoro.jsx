import { Button } from '@mui/material'
import React from 'react'

const BtnPomodoro = ({title,activeClass,_callback}) => {
  return (
<button className={activeClass} onClick={_callback}>{title} </button>)
}

export default BtnPomodoro