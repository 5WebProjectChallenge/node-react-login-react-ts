import React from "react";
import CustomButton from "../Buttons";
import JumboContainer from "../Jumbotron";

interface Props {
  height?: string;
  width?: string;
  theme: string;
  bg: string;
  color: string;
  btnType:string
}

const Navbar: React.FC<Props> = ({
  height = "50px",
  width = "100%",
  bg,
  color,
  btnType
}) => {

    
  return (
    <JumboContainer height={height} width={width} bg={bg} color={color}>
      <CustomButton label="Login" handeOnClick={() => undefined} type={btnType} margin="auto 10px"/>
      <CustomButton label="Signup" handeOnClick={() => undefined} type={btnType} margin="auto 10px"/>
    </JumboContainer>
  );
};

export default Navbar;
