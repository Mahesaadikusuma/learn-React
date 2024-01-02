import React from 'react'
import AuthLayouth from '../components/Layouts/AuthLayouth'
import FormLogin from '../components/Fragment/FormLogin'

function Login() {
  return (
    <AuthLayouth title="Login">
     <FormLogin />
    </AuthLayouth>
  )
}

export default Login