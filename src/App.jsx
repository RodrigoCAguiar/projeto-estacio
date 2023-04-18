import { useState } from 'react'
import  Login from './Login'
import Register from './Register'
import Password from './Password'

import { Outlet } from 'react-router-dom'

import './App.css'
import './Register.css'


function App() {
  const [currentForm, setCurrent] = useState('login');  

  const toggleForm = (formName) => {
    setCurrent(formName);
  }

  return (
/*<div>  
    {
    currentForm === 'login' ? 
      <Login onFormSwitch={toggleForm}/> : 
      <Register onFormSwitch={toggleForm}/>
    }
</div>*/
    <Login />
  )
}

export default App;
