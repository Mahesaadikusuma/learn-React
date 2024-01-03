import React from 'react'
import AuthLayouth from '../components/Layouts/AuthLayouth'
import FormLogin from '../components/Fragment/FormLogin'
import { Link } from 'react-router-dom'

function Login() {
  return (
    <AuthLayouth title="Login">
     <FormLogin />

     <p className='text-sm mt-5 text-center '>Dont Have an account? <Link to={"/register"} className='font-bold text-blue-600'>Register</Link></p>
    </AuthLayouth>
  )
}

export default Login