import React from "react";

import { useGetAuthUserQuery } from "../../generated/graphql";


const Home: React.FC = ({}) => {
  const [{ data }] = useGetAuthUserQuery();
  return <h4>{JSON.stringify(data)}</h4>;
};

export default Home;
