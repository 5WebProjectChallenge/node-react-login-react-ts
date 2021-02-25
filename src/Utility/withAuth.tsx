import React, { useEffect, useState } from "react";
import { useHistory, useLocation } from "react-router-dom";
import { convertToObject } from "typescript";
import JumboContainer from "../component/Jumbotron";
import Loading from "../component/Loading";
import { useGetAuthUserQuery } from "../generated/graphql";

const withAuth = (WrappedComponent: React.ComponentType) => {
  return (props: any) => {
    const [{ data, fetching, error }] = useGetAuthUserQuery();
    const { pathname } = useLocation();
    const history = useHistory();
    const [isValidUser,setIsValidUser] = useState(false);

    useEffect(() => {
      checkUser();
    }, [fetching]);


    const checkUser = () => {
      if (
        !fetching &&
        !!data?.getAuthUser && // is auth
        (pathname.includes("login") || pathname.includes("signup"))
      ) {
        setIsValidUser(true)
        history.push("/");
      }

      if (
        !fetching &&
        !data?.getAuthUser && // is auth
        !(pathname.includes("login") || pathname.includes("signup"))
      ) {
        history.push("/login");
      }
    };

    if (fetching) {
      return (
        <JumboContainer bg="transparent" height="90vh">
          {" "}
          <Loading />{" "}
        </JumboContainer>
      );
    }
    return <WrappedComponent {...props} />;
  };
};

export default withAuth;
