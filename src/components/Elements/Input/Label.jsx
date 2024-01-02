import React from 'react';

const Label = (props) => {
  const { htmlFor, children } = props; // Memperbaiki deklarasi props dan children
  return (
    <label htmlFor={htmlFor} className="block text-slate-700 font-bold mb-2">
      {children}
    </label>
  );
};

export default Label;
