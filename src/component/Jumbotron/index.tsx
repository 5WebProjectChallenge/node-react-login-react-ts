import React from "react";
import CustomButton from "../Buttons";

import './styles.css'

interface Props {
  bg?: string;
  color?: string;
  fs?: string;
  padding?: string;
  margin?: string;
  children: React.ReactNode;
  width?: string;
  height?: string;
}

const JumboContainer: React.FC<Props> = ({
  children,
  bg,
  color,
  fs,
  margin,
  padding,
  height,
  width
}) => {
  let backgroundColor = "#ccc";
  if (bg === "green") {
    backgroundColor = "#256774";
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
        width
      }}
    > 
      {children}
      {/* <CustomButton /> */}
    </div>
  );
};

export default JumboContainer;
