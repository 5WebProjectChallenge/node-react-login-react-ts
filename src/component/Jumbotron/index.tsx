import React from "react";
import CustomButton from "../Buttons";

import './styles.css'

interface Props {
  bg?: string;
  color?: string;
  fs?: string;
  padding?: string;
  margin?: string;
  children?: React.ReactNode;
  width?: string;
  height?: string;
  flexDirection?: any;
  justifyContent?: string;
}

const JumboContainer: React.FC<Props> = ({
  children,
  bg,
  color,
  fs,
  margin,
  padding,
  height,
  width,
  flexDirection="row",
  justifyContent="center"
}) => {
  let backgroundColor = "#ccc";
  if (bg === "green") {
    backgroundColor = "#256774";
  }else if(bg === "tranparent"){
    backgroundColor="tranparent"
  }

  return (
    <div
      className="basic-container"
      style={{
        backgroundColor,
        color,
        fontSize: fs,
        margin,
        padding,
        height,
        width,
        flexDirection,
        justifyContent
      }}
    > 
      {children}
    </div>
  );
};

export default JumboContainer;
