import React, { SetStateAction, useState } from "react";
import { useHistory } from "react-router-dom";
import Form from "../../component/Form";

import { useSignUpMutation } from "../../generated/graphql";

const SignUp: React.FC = ({}) => {
  const [_, signupUser] = useSignUpMutation();
  const history = useHistory();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const inputFields = [
    {
      label: "Username",
      type: "text",
      value: username,
      key: "signup-username-input",
      handleOnChange: (value: SetStateAction<undefined>) =>
        setUsername(value + ""),
    },
    {
      label: "Password",
      type: "password",
      value: password,
      key: "signup-password-input",
      handleOnChange: (value: SetStateAction<undefined>) =>
        setPassword(value + ""),
    },
  ];

  const handleSignupUser = async () => {
    try {
      await signupUser({ username, password });
      history.push("/");
    } catch (e) {
      console.log("HANDLE EXCEPTION HERE");
    }
  };

  return (
    <Form
      heading="Welcome"
      height="90vh"
      btnText="SignUp"
      inputFields={inputFields}
      onSubmitBtnClick={() => handleSignupUser()}
    />
  );
};

export default SignUp;
