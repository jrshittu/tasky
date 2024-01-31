"use client"
import { useState } from'react'

const AddTask = ({onAdd}) => {
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [date, setDate] = useState('')
    const [completed, setCompleted] = useState(false)
    const [important, setImportant] = useState(false)

    const handleChange = (name) => (e) => {
        if (name === 'title') {
            setTitle(e.target.value)
        } else if (name === 'description') {
            setDescription(e.target.value)
        } else if (name === 'date') {
            setDate(e.target.value)
        } else if (name === 'completed') {
            setCompleted(e.target.checked)
        } else if (name === 'important') {
            setImportant(e.target.checked)
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        const newTask = {
            title,
            description,
            date,
            completed,
            important,
        };

        onAdd(newTask);

        setTitle('');
        setDescription('');
        setDate('');
        setCompleted(false);
        setImportant(false);

    }

  return (
    <form 
        className='flex-column bg-[#f7f6f6] sm:block p-2 mt-8 rounded border-[#f7cef8] border-2'
        onSubmit={handleSubmit}
    >
      <h1 className='font-bold text-xl text-center text-black mb-2'>Create a Task</h1>
      <div className='flex flex-row gap-2 space-around mb-2'>
        <label htmlFor="title"
            className='font-bold'
        >
            Title:
        </label>
        <input 
            type='text'
            id='title'
            name='title'
            value={title}
            onChange={handleChange("title")}
            placeholder='Enter a task title'
            className='border-[#f7cef8] border-2 p-1 rounded'
        />
      </div>
      <div className='flex flex-col gap-2 justify-between mb-2'>
        <label htmlFor="description" className='font-bold'>Description:</label>
        <textarea
            value={description}
            onChange={handleChange("description")}
            placeholder='Enter a task description'
            id='description'
            name='description'
            rows={5}
            className='rounded border-[#f7cef8] border-2 p-1'
        >
            
        </textarea>
      </div>
      <div className='flex flex-row gap-2 space-around mb-2'>
        <label htmlFor="date" className='font-bold'>Date</label>
        <input 
            value={date}
            onChange={handleChange("date")}
            type='date'
            id='date'
            name='date'
            className='rounded border-[#f7cef8] border-2 p-1'
        />
      </div>
      <div className='flex flex-row gap-2 space-around mb-2'>
        <label htmlFor="completed" className='font-bold'>Completed</label>
        <input 
            value={completed.toString()}
            onChange={handleChange("completed")}
            type='checkbox'
            name='completed'
            id='completed'
            className='rounded border-[#f7cef8] border-2 p-1'
        />
      </div>
      <div className='flex flex-row gap-2 space-around mb-2'>
        <label htmlFor="important" className='font-bold'>Important</label>
        <input 
            value={important.toString()}
            onChange={handleChange("important")}
            type='checkbox'
            name='important'
            id='important'
            className='rounded border-[#f7cef8] border-2 p-1'
        />
      </div>
      <div className='flex justify-center items-center'>
        <button
            className='rounded border-[#f7cef8] border-2 p-2 bg-blue-800 hover:bg-blue-600 text-white '
            type='submit'
        >
            Create Task
        </button>
      </div>
    </form>
  )
}

export default AddTask
