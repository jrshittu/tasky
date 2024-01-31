"use client"
import { useState } from'react'
import AddTask from "./AddTask"
import TaskList from "./TaskList"
import TaskCard from "./TaskCard"

const Contents = () => {
  
  const [tasks, setTasks] = useState([])

  const handleAddTask = (task) => {
    setTasks([...tasks, task]);
  }

  return (
    <div className="m-6">
      <p className="text-xl font-bold text-[#FCA311] border-b-2 border-slate-300 w-[5.7rem]">
        {}
      </p>
      <div className="flex flex-col justify-center items-center">
        <AddTask tasks={tasks} onAdd={handleAddTask} />
        <TaskList tasks={tasks} />
      </div>
    </div>
  )
}

export default Contents
