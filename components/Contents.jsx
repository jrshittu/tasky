"use client"
import { useState } from'react'
import AddTask from "./AddTask"
import TaskList from "./TaskList"
import TaskCard from "./TaskCard"

const Contents = () => {
  
  const [tasks, setTasks] = useState([])
  const [addTask, setAddTask] = useState(false)

  const handleAddTask = (task) => {
    setTasks([...tasks, task]);
  }

  const handleSetAddTask = () => {
    setAddTask(true);
  }

  return (
    <div className="m-6">
      <p className="text-xl font-bold text-[#FCA311] border-b-2 border-slate-300 w-[5.7rem]">
        {}
      </p>
      <div className="flex flex-col justify-center items-center">
        <TaskList tasks={tasks} />

          {
            addTask &&
            <AddTask tasks={tasks} onAdd={handleAddTask} />
          }

        <div>
          <button onClick={handleSetAddTask}>Add Task</button>
        </div>
      </div>
    </div>
  )
}

export default Contents
