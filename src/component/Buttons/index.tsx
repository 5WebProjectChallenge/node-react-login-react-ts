import React from "react";

import "./styles.css";

interface Props {
  label: string;
  type:string;
  bg?: string;
  color?: string;
  fs?: string;
  padding?: string;
  margin?: string;
  disable?: boolean;
  handeOnClick: () => void;
}

const CustomButton: React.FC<Props> = ({
  label,
  handeOnClick,
  fs,
  padding,
  margin,
  type,
  disable = false,
}) => {
    let backgroundColor = "#ccc"
    let btnColor = "#000"

    if(type === "primary"){
        backgroundColor = "#256774"
        btnColor = "#fff"
    }

  
    return (
    <button
      disabled={disable}
      className="basic-button"
      onClick={handeOnClick}
      style={{
        backgroundColor,
        color:btnColor,
        fontSize:fs,
        margin,
        padding
      }}
    >
      {label}
    </button>
  );
};

export default CustomButton;
