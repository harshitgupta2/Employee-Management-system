import React from 'react'

const CompleteTask = ({data}) => {
  return (
    <div className='flex-shrink-0 h-full w-[300px] bg-blue-400 p-5 rounded-xl'>
      <div className='flex justify-between items-center '>
        <h3 className='bg-red-500 text-sm px-3 py-1 rounded'>{data.category}</h3>
        <h4 className='text-sm'>{data.date}</h4>
      </div>
      <h2 className='mt-5 text-2xl font-semibold'>{data.title}</h2>
      <p className='text-sm mt-2'>
       {data.description}
      </p>
      <div className='mt-2'>
        <button className=' px-5 py-2 bg-green-600  my-5 rounded-md'>Complete</button>
      </div>
      </div>
  )
}

export default CompleteTask
