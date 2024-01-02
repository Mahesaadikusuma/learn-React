import React from "react";
import AuthLayouth from "../components/Layouts/AuthLayouth";
import FormRegister from "../components/Fragment/FormRegister";

function Register() {
  return (
    <AuthLayouth title="Register">
      <FormRegister />
    </AuthLayouth>
  );
}

export default Register;
