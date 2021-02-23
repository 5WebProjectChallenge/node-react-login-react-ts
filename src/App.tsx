import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Login from "./container/Login";
import { createClient, fetchExchange, Provider } from "urql";

const client = createClient({
  url: "http://localhost:4000/graphql",
  fetchOptions: {
    credentials: "include", // as backend will send us cokke and we need to save it
  },
  exchanges:[
    fetchExchange
  ]
});

export default function App() {
  return (
    <Provider value={client}>
      <Router>
        <Switch>
          <Route path="/">
            <Login />
          </Route>
        </Switch>
      </Router>
    </Provider>
  );
}
