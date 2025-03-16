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
  const [userData,SetUserData] = useContext(AuthContext)

useEffect(()=>{
  const loggedInUser = localStorage.getItem('loggedInUser')
   if(loggedInUser){
    const userData = JSON.parse(loggedInUser);
    setUser(userData.role)
    setLoggedInUserData(userData.data);
    
   }

},[])
// console.log(Array.isArray(userData))
// console.log(userData);
  const handleLogin = (email,password)=>{
    if (email == 'admin@me.com' && password == '123') {
      setUser('admin')
      localStorage.setItem('loggedInUser', JSON.stringify({ role: 'admin' }))
    } else if (userData) {
      const employee = userData.employees.find((e) => email == e.email && e.password == password)
      if (employee) {
        setUser('employee')
        setLoggedInUserData(employee)
        localStorage.setItem('loggedInUser', JSON.stringify({ role: 'employee',data:employee }))
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
