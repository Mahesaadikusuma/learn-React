import React from 'react'
const Input  = (props) => {
  const { type, placeholder,name,id } = props
  return(
    <input type={type} name={name} id={id} placeholder={placeholder} className="text-sm border border-gray-900 rounded w-full px-3 py-2 text-slate-700 placeholder:opacity-50 "  />
  )
}

export default Input