import React, { useContext } from 'react'
import { AuthContext } from '../../context/Authprovider'

const AllTask = () => {

  const [userData,setUserData] = useContext(AuthContext);
  
  return (
    <div  id="alltask"className='bg-[#1c1c1c] p-5 mt-5 rounded  '>
    <div className='  bg-red-400 mb-2 py-2 px-4 flex justify-between rounded   '>
        <h2 className='text-lg font-medium w-1/5'>Employees Name</h2>
        <h3 className='text-lg font-medium w-1/5'>New task</h3>
        <h5 className='text-lg font-medium w-1/5'>Active task</h5>
        <h5 className='text-lg font-medium w-1/5'>Completed Task</h5>
        <h5 className='text-lg font-medium w-1/5'>Failed Task</h5>
      </div>
    
  <div className='overflow-auto '>{userData.employees.map(function(elem,idx){
      return  <div key={idx} className=' border-2 border-emerald-400 bg-emraled-500 mb-2 py-2 px-4 flex justify-between rounded   '>
        <h2 className='text-lg font-medium w-1/5'>{elem.firstname}</h2>
        <h3 className='text-lg font-medium w-1/5 text-blue-600'>{elem.taskcount.newTask}</h3>
        <h5 className='text-lg font-medium w-1/5 text-yellow-400'>{elem.taskcount.active}</h5>
        <h5 className='text-lg font-medium w-1/5 text-green-600'>{elem.taskcount.completed}</h5>
        <h5 className='text-lg font-medium w-1/5 text-red-600'>{elem.taskcount.failed}</h5>
      </div>
    })}
    </div>
    </div>
  )
}

export default AllTask
