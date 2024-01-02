import React from "react";

function AuthLayouth(props) {
     const {children, title} = props
  return (
    <div className="w-full max-w-xs">
      <h1 className="text-3xl font-bold mb-8 text-blue-600">{title}</h1>
      <p className="font-medium text-slate-500 mb-2">
        Welcome Please Enter Your Details
      </p>

      {children}
    </div>
  );
}

export default AuthLayouth;
