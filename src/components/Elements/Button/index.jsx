import React from "react";

function Button(props) {
  const { children = "Hello..", classname = "bg-black text-white" } = props;
  return (
    <button className={`h-10 px-6 ${classname}  `} type="submit">
      {children}
    </button>
  );
}

export default Button;
