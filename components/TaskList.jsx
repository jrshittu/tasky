import React from 'react'

const TaskList = ({tasks}) => {
  return (
    <div className='sm:flex flex-row block'>
      {
        tasks.map((item) => (
          <div className='bg-[#f7f6f6] p-2 mx-2 mt-8 rounded border-[#f7cef8] border-2'>
            <h1>Title: {item.title}</h1>
            <p>Description: {item.description}</p>
            <p>Date: {item.date}</p>
            <p>{item.completed}</p>
            <p>{item.important}</p>
            <button className='bg-red-400 text-white sm:block p-2 mt-8 rounded border-[#f7cef8] border-2'>Delete</button>
          </div>
        ))
      }
    </div>
  )
}

export default TaskList
