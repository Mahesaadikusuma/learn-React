import React from "react";
import { Link } from "react-router-dom";

function AuthLayouth({ children, title, type }) {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="w-full max-w-xs">
        <h1 className="text-3xl font-bold mb-8 text-blue-600">{title}</h1>
        <p className="font-medium text-slate-500 mb-2">
          Welcome Please Enter Your Details
        </p>

        {children}
 
        <Navigation type={type}/>
      </div>
    </div>
  );
}

const Navigation = ({ type }) => {
  if (type === "login") {
    return (
      <p className="text-sm mt-5 text-center ">
        Dont Have an account?{" "}
        <Link to={"/register"} className="font-bold text-blue-600">
          Register
        </Link>
      </p>
    );
  } else {
    return(
      <p className="text-sm mt-5 text-center ">
      already have an account? {" "}
      <Link to={"/login"} className="font-bold text-blue-600">
        Login
      </Link>
    </p>
    )
  }
};

export default AuthLayouth;
