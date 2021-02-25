import React, { SetStateAction, useState } from "react";
import { useHistory } from "react-router-dom";
import { convertToObject } from "typescript";
import Form from "../../component/Form";

import { useLoginMutation } from "../../generated/graphql";

const Login: React.FC = ({}) => {
  const [_, loginUser] = useLoginMutation();
  const history = useHistory();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setisLoading] = useState(false);
  const [errorMsg, seterrorMsg] = useState("");
  const [isError, setisError] = useState(false);

  const inputFields = [
    {
      label: "Username",
      type: "text",
      value: username,
      key: "login-username-input",
      handleOnChange: (value: SetStateAction<undefined>) =>
        setUsername(value + ""),
    },
    {
      label: "Password",
      type: "password",
      value: password,
      key: "login-password-input",
      handleOnChange: (value: SetStateAction<undefined>) =>
        setPassword(value + ""),
    },
  ];

  const handleLoginUser = async () => {
    setisLoading(true);
    try {
      const { data } = await loginUser({ username, password });
      setisLoading(false);
      if (data?.login.user?.id) {
        setisError(false);
        history.push("/");
      } else {
        setisError(true);
        seterrorMsg("Invalid data");
      }
    } catch (e) {
      setisLoading(false);

      setisError(true);
      seterrorMsg("Invalid data");
      console.log("HANDLE EXCEPTION HERE");
    }
  };

  return (
    <Form
      heading="Welcome back"
      height="90vh"
      btnText="login"
      isError={isError}
      errorMsg={errorMsg}
      isLoading={isLoading}
      inputFields={inputFields}
      onSubmitBtnClick={() => handleLoginUser()}
    />
  );
};

export default Login;
