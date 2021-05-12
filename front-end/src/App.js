import React from "react";
import styled from "styled-components";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Home from "./pages/Home";
import Analytics from "./pages/Analytics";
import UserAccount from "./pages/UserAccount";

const App = () => {
  return (
    <BrowserRouter>
      <Container>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/analytics">
            <Analytics />
          </Route>
          <Route exact path="/user_account">
            <UserAccount />
          </Route>
          <Route exact path="/faq">
            <FAQ />
          </Route>
        </Switch>
        <Sidebar />
      </Container>
    </BrowserRouter>
  );
};

const Container = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
`;

export default App;
