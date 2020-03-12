import React from "react";
import { FormScreen } from "../screens/FormScreen";
import { GlobalStyle } from "./global-style";
import { AcceptScreen } from "../screens/AcceptScreen";
import styled from "styled-components";
import { store } from "../store/store";
import { Provider } from "react-redux";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { NotFound } from "../screens/NotFound";

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px;
`;

const App = () => {
  return (
    <Provider store={store}>
      <GlobalStyle />
      <StyledContainer>
        <BrowserRouter>
          <Switch>
            <Route exact path="/">
              <FormScreen />
            </Route>
            <Route exact path="/accept">
              <AcceptScreen />
            </Route>

            <Route>
              <NotFound/>
            </Route>
          </Switch>
        </BrowserRouter>
      </StyledContainer>
    </Provider>
  );
};

export { App };
