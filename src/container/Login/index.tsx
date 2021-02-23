import React from "react";

import { useGetAuthUserQuery } from "../../generated/graphql";

const Login: React.FC = ({}) => {
  const [{ data }] = useGetAuthUserQuery();
  return (
    <div>
      Login
      <h4>{JSON.stringify(data)}</h4>
    </div>
  );
};

export default Login;
