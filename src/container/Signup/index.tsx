import React, { SetStateAction, useState } from "react";
import Form from "../../component/Form";

import { useGetAuthUserQuery } from "../../generated/graphql";

const SignUp: React.FC = ({}) => {
  const [{ data }] = useGetAuthUserQuery();
  const [username,setUsername] = useState()
  const [password,setPassword] = useState()


  const inputFields = [
    {
      label:"Username",
      type:"text",
      value:username,
      key:"signup-username-input",
      handleOnChange:(value:SetStateAction<undefined>)=>setUsername(value)
    },{
      label:"Password",
      type:"password",
      value:password,
      key:"signup-password-input",
      handleOnChange:(value:SetStateAction<undefined>)=>setPassword(value)
    }
  ]
  return (
      <Form
        heading="Welcome"
        height="90vh"
        btnText="SignUp"
        inputFields={inputFields}
        onSubmitBtnClick={()=>console.log("handle SignUp btn click")}
      />
  );
};

export default SignUp;
