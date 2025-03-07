import { useContext, useEffect, useState } from 'react'
import './App.css'
import Login from './components/Auth/Login'
import EmployeDashbBoard from './components/Dashboard/EmployeDashbBoard'
import AdminDashBoard from './components/Dashboard/AdminDashBoard'
import { getLocalStorage, setLocalStrorage } from './utils/LocalStorage'
import { AuthContext } from './context/Authprovider'

function App() {
  const [user, setUser] = useState(null)
  const [loggedInUserData, setLoggedInUserData] = useState(null)
  const authdata = useContext(AuthContext);

useEffect(()=>{
  const loggedInUser = localStorage.getItem('loggedInUser')
   if(loggedInUser){
    const userData = JSON.parse(loggedInUser);
    setUser(userData.role)
    setLoggedInUserData(userData.data);
    
   }

},[])
  


  const handleLogin = (email,password)=>{
    if(authdata && authdata.admin.find((e)=> email == e.email && e.password == password)){
      localStorage.setItem('loggedInUser',JSON.stringify({role:"admin"}))
      setUser('admin')
    }else if(authdata){
      const employee =  authdata.employees.find((e)=>email==e.email && e.password==password)
      if(employee){
        localStorage.setItem('loggedInUser',JSON.stringify({role:"employee",data:employee}))
        setLoggedInUserData(employee)
        setUser('employee')
      }

    }else{
      alert("invalid credentials")
    }
  }


  return (
    <>
     {!user ? <Login handleLogin={handleLogin} /> :''}
     {user == 'admin' ? <AdminDashBoard changeUser = {setUser} /> : (user=='employee'? <EmployeDashbBoard changeUser = {setUser} data={loggedInUserData}/> : null) }
    </>
  )
}

export default App
