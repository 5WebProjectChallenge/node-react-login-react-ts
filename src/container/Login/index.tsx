import React, { SetStateAction, useState } from "react";
import Form from "../../component/Form";

import { useGetAuthUserQuery } from "../../generated/graphql";

const Login: React.FC = ({}) => {
  const [{ data }] = useGetAuthUserQuery();
  const [username,setUsername] = useState()
  const [password,setPassword] = useState()


  const inputFields = [
    {
      label:"Username",
      type:"text",
      value:username,
      handleOnChange:(value:SetStateAction<undefined>)=>setUsername(value)
    },{
      label:"Password",
      type:"password",
      value:password,
      handleOnChange:(value:SetStateAction<undefined>)=>setPassword(value)
    }
  ]
  return (
      <Form
        heading="Welcome back"
        height="90vh"
        btnText="login"
        inputFields={inputFields}
        onSubmitBtnClick={()=>console.log("handle login btn click")}
      />
  );
};

export default Login;
