import React, { Component } from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import DefaultLayout from "Layouts/DefaultLayout/DefaultLayout";
import EmptyLayout from "Layouts/EmptyLayout/EmptyLayout";
import AddStaff from "pages/AddStaff/AddStaff";
import AddMember from "pages/AddMember/AddMember";
import AddEquipment from "pages/AddEquipment/AddEquipment";
import AddCourse from "pages/AddCourse/AddCourse";
import ForgotPassword from "pages/ForgotPassword/ForgotPassword";
import ChangePassword from "pages/ChangePassword/ChangePassword";
import Staffs from "pages/Staffs/Staffs";
import SellCourses from "pages/SellCourses/SellCourses";
import EditStaff from "pages/EditStaff/EditStaff";
import { getToken } from "../utils/utils";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";

export const AuthorizedRoute = ({ component: Component, isUser, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      isUser ? (
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
    const isUser = getToken("identity");

    return (
      <Switch>
        <Route
          exact
          path={[
            "/",
            "/staffs",
            "/staffs/add",
            "/sell-courses",
            "/courses/add",
            "/equipments/add",
            "/members/add",
            "/staffs/:id"
          ]}
        >
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
            <AuthorizedRoute
              exact
              path="/sell-courses"
              component={SellCourses}
              isUser={isUser}
            />
            <AuthorizedRoute
              exact
              path="/courses/add"
              component={AddCourse}
              isUser={isUser}
            />
            <AuthorizedRoute
              exact
              path="/equipments/add"
              component={AddEquipment}
              isUser={isUser}
            />
            <AuthorizedRoute
              exact
              path="/members/add"
              component={AddMember}
              isUser={isUser}
            />
            <AuthorizedRoute
              exact
              path="/staffs/:id"
              component={EditStaff}
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
