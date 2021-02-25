import React from "react";
import { LoadingSmallLight } from "../Loading";

import "./styles.css";

interface Props {
  label: string;
  type: string;
  bg?: string;
  color?: string;
  fs?: string;
  padding?: string;
  margin?: string;
  disable?: boolean;
  handeOnClick: () => void;
  isLoading: boolean;
}

const CustomButton: React.FC<Props> = ({
  label,
  handeOnClick,
  fs,
  padding,
  margin,
  type,
  isLoading,
  disable = false,
}) => {
  let backgroundColor = "#ccc";
  let btnColor = "#000";

  if (type === "primary") {
    backgroundColor = "#256774";
    btnColor = "#fff";
  }

  return (
    <button
      disabled={disable}
      className="basic-button"
      onClick={handeOnClick}
      style={{
        backgroundColor,
        color: btnColor,
        fontSize: fs,
        margin,
        padding,
      }}
    >
      {isLoading && <LoadingSmallLight />}
      {!isLoading && label}
    </button>
  );
};

export default CustomButton;
