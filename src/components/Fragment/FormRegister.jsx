import React from 'react'
import InputForm from '../Elements/Input'
import Button from '../Elements/Button'

function FormRegister() {
  return (
     <form action="">
      <InputForm label='FullName' type="text" placeholder="Insert Your Name Hire" name='fullname'/>
      
     <InputForm label='Email' type="email" placeholder="example@gmail.com" name='email'/>

     <InputForm label='Password' type="password" placeholder="***" name='password'/>
     <InputForm label='Confirm Password' type="password" placeholder="***" name='confirmPassword'/>

     

     <Button classname={"bg-blue-600 text-white w-full"}>Register</Button>
     
   </form>
  )
}

export default FormRegister