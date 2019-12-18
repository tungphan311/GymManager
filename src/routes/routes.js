import React, { Component } from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import DefaultLayout from "Layouts/DefaultLayout/DefaultLayout";
import EmptyLayout from "Layouts/EmptyLayout/EmptyLayout";
import AddStaff from "pages/AddStaff/AddStaff";
import ForgotPassword from "pages/ForgotPassword/ForgotPassword";
import ChangePassword from "pages/ChangePassword/ChangePassword";
import Staffs from "pages/Staffs/Staffs";
import { getToken } from "../utils/utils";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";

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
            <AuthorizedRoute
              exact
              path="/staffs"
              component={Staffs}
              isUser={isUser}
            />
          </DefaultLayout>
        </Route>
        <Route exact path={["/login", "/forgot-password", "/change-password"]}>
          <EmptyLayout>
            <Route exact path="/login" component={Login} />
            <Route exact path="/forgot-password" component={ForgotPassword} />
            <Route exact path="/change-password" component={ChangePassword} />
          </EmptyLayout>
        </Route>
      </Switch>
    );
  }
}

export default Routes;
