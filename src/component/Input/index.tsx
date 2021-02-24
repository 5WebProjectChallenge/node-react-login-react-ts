import React from "react";

import './styles.css'

interface Props {
  label?: string | null;
  value: string | undefined;
  handleOnChange:any
}



const Input: React.FC<Props> = ({ label,value,handleOnChange }) => {
  
  

  return (
    <span className={`input-container ${!!value && "input-was-active"}`}>
      <input value={value} onChange={(e)=>handleOnChange(e.target?.value)}/>
      {label && <label>{label}</label>}
    </span>
  );
};

export default Input;
