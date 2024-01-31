import React from 'react'

const TaskCard = ({task}) => {
  return (
    <div>
      <h1>{task.title}</h1>
      <p>{task.description}</p>
      <p>{task.date}</p>
      <p>{task.completed}</p>
      <p>{task.important}</p>
      <button>Delete</button>
      <button>Edit</button>
    </div>
  )
}

export default TaskCard
