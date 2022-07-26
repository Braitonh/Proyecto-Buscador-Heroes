import React from 'react'
import { useNavigate } from 'react-router-dom'

export const LoginScreen = () => {

  const navigate = useNavigate()

  const handleLogin =  () => {
    navigate('/');
  }

  return (
    <div className='container mt-5'>
      <h1>Login</h1>
      <hr/>

      <button
        className='btn btn-primary'
        onClick={handleLogin}
      >
        login
      </button>
    </div>
  )
}
