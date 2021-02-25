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
    try {
      await loginUser({ username, password });
      history.push("/");
    } catch (e) {
      console.log("HANDLE EXCEPTION HERE");
    }
  };

  return (
    <Form
      heading="Welcome back"
      height="90vh"
      btnText="login"
      inputFields={inputFields}
      onSubmitBtnClick={() => handleLoginUser()}
    />
  );
};

export default Login;
