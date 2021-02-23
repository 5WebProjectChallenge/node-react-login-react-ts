import React, { useState, useEffect, useContext } from "react";
import { useQuery } from "urql";
import { useGetAuthUserQuery } from "../../generated/graphql";

interface errorBody {
  field: string;
  message: string;
}

const tempQuery = `
query getAuth{
  getAuthUser{
    id
    username
  }
}
`;

const Login: React.FC = ({}) => {
  const [{ data }] = useGetAuthUserQuery();
  return <h4>{JSON.stringify(data)}</h4>;
};

export default Login;
