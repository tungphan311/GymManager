import React, { Component } from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import DefaultLayout from "Layouts/DefaultLayout/DefaultLayout";
import Members from "pages/Members/Members";
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
import Courses from "pages/Courses/Courses";
import EditMember from "pages/EditMember/EditMember";
import Invoices from "pages/Invoices/Invoices";
import Equipments from "pages/Equipments/Equipments";
import EditCourse from "pages/EditCourse/EditCourse";
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
            "/equipments",
            "/members/add",
            "/staffs/edit/:id",
            "/courses",
            "/members/edit/:id",
            "/invoices",
            "/members",
            "/courses/edit/:id"
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
              path="/staffs/edit/:id"
              component={EditStaff}
              isUser={isUser}
            />
            <AuthorizedRoute
              exact
              path="/courses"
              component={Courses}
              isUser={isUser}
            />
            <AuthorizedRoute
              exact
              path="/members/edit/:id"
              component={EditMember}
              isUser={isUser}
            />
            <AuthorizedRoute
              exact
              path="/equipments"
              component={Equipments}
              isUser={isUser}
            />
            <AuthorizedRoute
              exact
              path="/members"
              component={Members}
              isUser={isUser}
            />
            <AuthorizedRoute
              exact
              path="/invoices"
              component={Invoices}
              isUser={isUser}
            />
            <AuthorizedRoute
              exact
              path="/courses/edit/:id"
              component={EditCourse}
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
