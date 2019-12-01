import React, { Component } from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import DefaultLayout from "Layouts/DefaultLayout/DefaultLayout";
import EmptyLayout from "Layouts/EmptyLayout/EmptyLayout";
import AddStaff from "pages/AddStaff/AddStaff";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import { getToken } from "../utils/utils";

export const AuthorizedRoute = ({ component: Component, isUser, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      !isUser ? (
        <Component {...props} {...rest} />
      ) : (
        <Redirect
          to={{
            pathname: "/login"
          }}
        />
      )
    }
  />
);

class Routes extends Component {
  render() {
    const isUser = getToken("token");

    return (
      <Switch>
        <Route exact path={["/", "/staffs", "/staffs/add"]}>
          <DefaultLayout>
            <AuthorizedRoute exact path="/" component={Home} isUser={isUser} />
            <AuthorizedRoute
              exact
              path="/staffs/add"
              component={AddStaff}
              isUser={isUser}
            />
          </DefaultLayout>
        </Route>
        <Route exact path={["/login"]}>
          <EmptyLayout>
            <Route exact path="/login" component={Login} />
          </EmptyLayout>
        </Route>
      </Switch>
    );
  }
}

export default Routes;
