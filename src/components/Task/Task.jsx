import React from 'react'
import './Task.css'

export const Task = ({titel,description,deleteTask,index}) => {
  return (
    <>
    <div className='task'>
      <div className='content'>
        <p>{titel}</p>
        <span>{description}</span>
      </div>
      <button className='btn2' onClick = {() => deleteTask(index)} >-</button>
    </div>
    </>
  )
}

export default Task;