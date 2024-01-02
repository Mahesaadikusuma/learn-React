import React from 'react'
import InputForm from '../Elements/Input'
import Button from '../Elements/Button'

function FormLogin() {
  return (
     <form action="">
     <InputForm label='Email' type="email" placeholder="example@gmail.com" name='email'/>
     <InputForm label='Password' type="password" placeholder="***" name='password'/>

     

     <Button classname={"bg-blue-600 text-white w-full"}>Login</Button>
     
   </form>
  )
}

export default FormLogin