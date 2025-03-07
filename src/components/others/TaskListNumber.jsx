import React from 'react'

const TaskListNumber = ({data}) => {
  return (
    
      <div className='flex justify-between gap-5 screen mt-10'>
      <div className=' rounded-xl w-[45%] bg-red-400 py-6 px-9 '>
        <h2 className='text-2xl font-semibold'>{data.taskcount.newTask}</h2>
        <h3 className='text-xl font-medium'>New task</h3>
      </div>

      <div className=' rounded-xl w-[45%] bg-blue-400 py-6 px-9 '>
        <h2 className='text-2xl font-semibold'>{data.taskcount.completed}</h2>
        <h3 className='text-xl font-medium'>Completed task</h3>
      </div>
      
      <div className=' rounded-xl w-[45%] bg-green-400 py-6 px-9 '>
        <h2 className='text-2xl font-semibold'>{data.taskcount.active}</h2>
        <h3 className='text-xl font-medium'>Accepted task</h3>
      </div>
      
      <div className=' rounded-xl w-[45%] bg-yellow-400 py-6 px-9 '>
        <h2 className='text-2xl font-semibold'>{data.taskcount.failed}</h2>
        <h3 className='text-xl font-medium'>Failed task</h3>
      </div>
      </div>
 
  


  
    
  )
}

export default TaskListNumber
