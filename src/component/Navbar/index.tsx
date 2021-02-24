import React from "react";
import { useHistory, withRouter } from "react-router-dom";
import CustomButton from "../Buttons";
import JumboContainer from "../Jumbotron";

interface Props {
  height?: string;
  width?: string;
  theme: string;
  bg?: string;
  color?: string;
  btnType?: string;
  justifyContent?:string
}

export interface RouteComponentProps {
    height?: string;
    width?: string;
    theme: string;
    bg?: string;
    color?: string;
    btnType?: string;

  }

const Navbar: React.FC<Props> = ({
  height = "50px",
  width = "100%",
  bg = "grey",
  color = "#fff",
  btnType = "primary",
  justifyContent = "flex-end"
}) => {
  const history = useHistory();

  const handleNavBtnClick= (path:string) => {
    history.push(path);
  };

  return (
    <JumboContainer justifyContent={justifyContent} height={height} width={width} bg={bg} color={color}>
      <CustomButton
        label="Login"
        handeOnClick={() => handleNavBtnClick("login")}
        type={btnType}
        margin="auto 10px"
      />
      <CustomButton
        label="Signup"
        handeOnClick={() => handleNavBtnClick("signup")}
        type={btnType}
        margin="auto 10px"
      />
    </JumboContainer>
  );
};

export default withRouter(Navbar as any) as any;
