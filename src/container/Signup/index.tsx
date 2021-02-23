import React from "react";

import { useGetAuthUserQuery } from "../../generated/graphql";

const Signup: React.FC = ({}) => {
  const [{ data }] = useGetAuthUserQuery();
  return (
    <div>
      SignUP
      <h4>{JSON.stringify(data)}</h4>
    </div>
  );
};

export default Signup;
