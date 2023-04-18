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
    <Login />
  )
}

export default App;
