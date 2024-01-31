import React from 'react'

const TaskList = ({tasks}) => {
  return (
    <div>
      {
        tasks.map((item) => (
          <div>
            <h1>{item.title}</h1>
            <p>{item.description}</p>
            <p>{item.date}</p>
            <p>{item.completed}</p>
            <p>{item.important}</p>
            <button>Delete</button>
            <button>Edit</button>
          </div>
        ))
      }
    </div>
  )
}

export default TaskList
