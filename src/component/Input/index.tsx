import React from "react";

import "./styles.css";

interface Props {
  label?: string | null;
  value: string | undefined;
  handleOnChange: any;
  type?: string;
}

const Input: React.FC<Props> = ({
  label,
  value,
  handleOnChange,
  type = "text",
}) => {
  return (
    <span className={`input-container ${!!value && "input-was-active"}`}>
      <input
        type={type}
        value={value}
        onChange={(e) => handleOnChange(e.target?.value)}
      />
      {label && <label>{label}</label>}
    </span>
  );
};

export default Input;
