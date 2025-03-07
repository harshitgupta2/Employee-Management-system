import React, { useState } from 'react'


function Login({handleLogin}) {

    const [email, setemail] = useState('')
    const [password, setpassowrd] = useState('')

    const submitHandler = (e)=>{
   e.preventDefault(); 
   handleLogin(email,password)
   setemail("");
   setpassowrd("");

    }
  return (
    <div className='flex h-screen w-screen  items-center justify-center'>
    <div className='border-2 rounded-xl border-emerald-600 p-20 '>
        <form 
        onSubmit={submitHandler}
        className='flex flex-col items-center justify-center '>
            <input 
            value = {email}
            onChange={(e)=>{
                setemail(e.target.value)
            }}
            required
            className='outline-none bg-transparent border-2 border-emerald-600 py-3 px-5 rounded-full text-xl placeholder:text-gray-400' type="email" placeholder='Enter Email'
            />
            <input 
            value={password}
            onChange={(e)=>{
                setpassowrd(e.target.value);
            }}
             required 
             className=' outline-none bg-transparent border-2 border-emerald-600 py-3 px-5 mt-3 rounded-full text-xl placeholder:text-gray-400' type="password" placeholder='Enter password' />
            <button className=' text-black outline-none  border-none bg-emerald-600 py-3 px-5 mt-5 rounded-full text-xl placeholder:text-white'>Log in</button>
        </form>
    </div>
    </div>
  )
}

export default Login
