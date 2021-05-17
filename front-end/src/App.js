import React from "react";
import styled from "styled-components";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import GlobalStyles from "./GlobalStyles";
import Sidebar from "./components/Sidebar";
import Classes from "./pages/Classes";
import Analytics from "./pages/Analytics";
import UserAccount from "./pages/UserAccount";
import FAQ from "./pages/FAQ";

const App = () => {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <Container>
        <Sidebar />
        <Switch>
          <Route exact path="/classes">
            <Classes />
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
          <Route path="/">
            <Classes />
          </Route>
        </Switch>
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
