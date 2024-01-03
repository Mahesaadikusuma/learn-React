import React from "react";
import AuthLayouth from "../components/Layouts/AuthLayouth";
import FormRegister from "../components/Fragment/FormRegister";
import { Link } from "react-router-dom";

function Register() {
  return (
    <AuthLayouth title="Register">
      <FormRegister />
      <p className='text-sm mt-5 text-center '>Have an account? <Link to={"/login"} className='font-bold text-blue-600'>Login</Link></p>
    </AuthLayouth>
  );
}

export default Register;
