import React from "react";
import { useHistory, useLocation, withRouter } from "react-router-dom";
import { useLogoutMutation } from "../../generated/graphql";
import CustomButton from "../Buttons";
import JumboContainer from "../Jumbotron";

interface Props {
  height?: string;
  width?: string;
  theme: string;
  bg?: string;
  color?: string;
  btnType?: string;
  justifyContent?: string;
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
  justifyContent = "flex-end",
}) => {
  const history = useHistory();
  const { pathname } = useLocation();
  const [, logoutUser] = useLogoutMutation();
  const isUserAuth = !(
    pathname.includes("login") || pathname.includes("signup")
  );

  const handleNavBtnClick = (path: string) => {
    if (path === "logout") {
      handleLogoutButton();
    } else {
      history.push(path);
    }
  };

  const handleLogoutButton = async () => {
    try {
      await logoutUser();
      window.location.reload(true);
    } catch (e) {
      console.log("EXCEPTION IN LOGOUT", e);
    }
  };

  return (
    <JumboContainer
      justifyContent={justifyContent}
      height={height}
      width={width}
      bg={bg}
      color={color}
    >
      {isUserAuth && (
        <CustomButton
          isLoading={false}
          label="Logout"
          handeOnClick={() => handleNavBtnClick("logout")}
          type={btnType}
          margin="auto 10px"
        />
      )}
      {!isUserAuth && (
        <>
          <CustomButton
            label="Login"
            isLoading={false}
            handeOnClick={() => handleNavBtnClick("login")}
            type={btnType}
            margin="auto 10px"
          />
          <CustomButton
            label="Signup"
            isLoading={false}
            handeOnClick={() => handleNavBtnClick("signup")}
            type={btnType}
            margin="auto 10px"
          />
        </>
      )}
    </JumboContainer>
  );
};

export default withRouter(Navbar as any) as any;
