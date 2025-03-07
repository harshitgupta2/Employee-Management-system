import React, { useContext, useState } from 'react'
import { AuthContext } from '../../context/Authprovider';



const CreateTask = () => {

  const [userData,setUserData] = useContext(AuthContext);

  const [taskTitle, settaskTitle] = useState('');
  const [taskDescription, settaskDescription] = useState('')
  const [taskDate, settaskDate] = useState('');
  const [assignTo, setassignTo] = useState('')
  const [taskCategory, settaskCategory] = useState('')
  
  const [newTask, setNewTask] = useState('')

  const handleSubmit = (e)=>{
    e.preventDefault();

    setNewTask({taskTitle,taskDescription,taskDate,taskCategory,active:false,newTask:true,failed:false,completed:false});
    
    const data = userData
    
 
    data.forEach((elem)=>{
      if(assignTo == elem.firstname){
        elem.tasks.push(newTask)
        elem.taskCount.newTask =  elem.taskCount.newtask+1;
      }
    })
    setUserData(data);
    
    console.log(data)

    settaskTitle('')
    setassignTo('')
    settaskDate('')
    settaskCategory('')
    settaskDescription('')  


  }
  return (
    <div className="p-5 bg-[#1C1C1C] mt-5 rounded">
    <form onSubmit={(e)=>{
      handleSubmit(e)
    }} className="flex flex-wrap w-full items-start justify-between">
      <div className="w-1/2">
        <div>
          <h3 className="text-medium text-gray-300 mb-0.5 ">Task title</h3>
          <input 
          value={taskTitle}
          onChange={(e)=>{
            settaskTitle(e.target.value)
          }}
          className="text-medium py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400" type="text" placeholder="make a ui design" />
        </div>
        <div>
          <h3 className="text-medium text-gray-300 mb-0.5 mt-3.5">Date</h3>
          <input
           value={taskDate}
          onChange={(e)=>{
            settaskDate(e.target.value)
          }} 
            className="text-medium py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4"  type="date" />
        </div>
        <div>
          <h3 className="text-medium text-gray-300 mb-0.5">Assign to</h3>
          <input 
           value={assignTo}
          onChange={(e)=>{
            setassignTo(e.target.value)
          }}
           className="text-medium py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4" type="text" placeholder="emoployee name" />
        </div>
        <div>
          <h3 className="text-medium text-gray-300 mb-0.5">Category</h3>
          <input 
           value={taskCategory}
          onChange={(e)=>{
            settaskCategory(e.target.value)
          }}
           className="text-medium py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4" type="text" placeholder="design , dev , etc" />
        </div>
      </div>

      <div className="w-1/2">
        <h3 className="text-medium text-gray-300 mb-0.5">Description</h3>
        <textarea
         value={taskDescription}
          onChange={(e)=>{
            settaskDescription(e.target.value)
          }} 
         className="w-full h-44 text-medium py-3 px-4 rounded outline-none bg-transparent border-[1px] border-gray-400" name="" id="" col="30" row="10"></textarea>
        <button className="bg-emerald-500 py-3  hover:bg-emerald-600 px-3 rounded text-xl mt-4 w-full ">create task</button>
      </div>

    
    </form>
  </div>
  )
}

export default CreateTask
