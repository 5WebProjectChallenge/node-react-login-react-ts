import React, { SetStateAction, useState } from "react";
import { useHistory } from "react-router-dom";
import Form from "../../component/Form";

import { useSignUpMutation } from "../../generated/graphql";

const SignUp: React.FC = ({}) => {
  const [_, signupUser] = useSignUpMutation();
  const history = useHistory();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isError, setisError] = useState(false);
  const [errorMsg, seterrorMsg] = useState("");
  const [isLoading, setisLoading] = useState(false);

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
    setisLoading(true);
    try {
      const { data } = await signupUser({ username, password });
      setisLoading(false);
      if (data?.signUp?.user?.username) {
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
      heading="Welcome"
      height="90vh"
      isError={isError}
      errorMsg={errorMsg}
      btnText="SignUp"
      isLoading={isLoading}
      inputFields={inputFields}
      onSubmitBtnClick={() => handleSignupUser()}
    />
  );
};

export default SignUp;
