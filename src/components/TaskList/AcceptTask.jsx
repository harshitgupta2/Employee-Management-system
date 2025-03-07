import React from 'react'

const AcceptTask = ({data}) => {
  console.log();
  return (
    <div className='flex-shrink-0 h-full w-[300px] bg-red-400 rounded-xl p-5'>
      <div className='flex justify-between items-center '>
        <h3 className='bg-red-500 text-sm px-3 py-1 rounded'>{data.category}</h3>
        <h4 className='text-sm'>{data.date}</h4>
      </div>
      <h2 className='mt-5 text-2xl font-semibold'>{data.title}</h2>
      <p className='text-sm mt-3'>
       {data.description}
      </p>
      <div className='flex justify-between mt-11'>
        <button className='bg-green-500  py-2 px-2 text-sm rounded-md '>Mark as Completed</button>
        <button className='bg-red-500 py-1 px-2 text-sm rounded-md'>Mark as Failed</button>
      </div>
      </div>

  )
}

export default AcceptTask
