/* eslint-disable react/style-prop-object */
/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable no-script-url */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from "react";

class Home extends Component {
  render() {
    return (
      <div className="wrapper">
        <div className="main-header">
          <div className="logo-header" data-background-color="dark2">
            <a href="index.html" className="logo">
              <img
                src="/assets/img/logo.svg"
                alt="navbar brand"
                className="navbar-brand"
              />
            </a>
            <button
              className="navbar-toggler sidenav-toggler ml-auto"
              type="button"
              data-toggle="collapse"
              data-target="collapse"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon">
                <i className="icon-menu"></i>
              </span>
            </button>
            <button className="topbar-toggler more">
              <i className="icon-options-vertical"></i>
            </button>
            <div className="nav-toggle">
              <button className="btn btn-toggle toggle-sidebar">
                <i className="icon-menu"></i>
              </button>
            </div>
          </div>
          <nav
            className="navbar navbar-header navbar-expand-lg"
            data-background-color="dark"
          >
            <div className="container-fluid">
              <div className="collapse" id="search-nav">
                <form className="navbar-left navbar-form nav-search mr-md-3">
                  <div className="input-group">
                    <div className="input-group-prepend">
                      <button type="submit" className="btn btn-search pr-1">
                        <i className="fa fa-search search-icon"></i>
                      </button>
                    </div>
                    <input
                      type="text"
                      placeholder="Search ..."
                      className="form-control"
                    />
                  </div>
                </form>
              </div>
              <ul className="navbar-nav topbar-nav ml-md-auto align-items-center">
                <li className="nav-item toggle-nav-search hidden-caret">
                  <a
                    className="nav-link"
                    data-toggle="collapse"
                    href="#search-nav"
                    role="button"
                    aria-expanded="false"
                    aria-controls="search-nav"
                  >
                    <i className="fa fa-search"></i>
                  </a>
                </li>
                <li className="nav-item dropdown hidden-caret">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    id="messageDropdown"
                    role="button"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    <i className="fa fa-envelope"></i>
                  </a>
                  <ul
                    className="dropdown-menu messages-notif-box animated fadeIn"
                    aria-labelledby="messageDropdown"
                  >
                    <li>
                      <div className="dropdown-title d-flex justify-content-between align-items-center">
                        Messages
                        <a href="#" className="small">
                          Mark all as read
                        </a>
                      </div>
                    </li>
                    <li>
                      <div className="message-notif-scroll scrollbar-outer">
                        <div className="notif-center">
                          <a href="#">
                            <div className="notif-img">
                              <img
                                src="/assets/img/jm_denis.jpg"
                                alt="Img Profile"
                              />
                            </div>
                            <div className="notif-content">
                              <span className="subject">Jimmy Denis</span>
                              <span className="block">How are you ?</span>
                              <span className="time">5 minutes ago</span>
                            </div>
                          </a>
                          <a href="#">
                            <div className="notif-img">
                              <img
                                src="/assets/img/chadengle.jpg"
                                alt="Img Profile"
                              />
                            </div>
                            <div className="notif-content">
                              <span className="subject">Chad</span>
                              <span className="block">Ok, Thanks !</span>
                              <span className="time">12 minutes ago</span>
                            </div>
                          </a>
                          <a href="#">
                            <div className="notif-img">
                              <img
                                src="/assets/img/mlane.jpg"
                                alt="Img Profile"
                              />
                            </div>
                            <div className="notif-content">
                              <span className="subject">Jhon Doe</span>
                              <span className="block">
                                Ready for the meeting today...
                              </span>
                              <span className="time">12 minutes ago</span>
                            </div>
                          </a>
                          <a href="#">
                            <div className="notif-img">
                              <img
                                src="/assets/img/talha.jpg"
                                alt="Img Profile"
                              />
                            </div>
                            <div className="notif-content">
                              <span className="subject">Talha</span>
                              <span className="block">Hi, Apa Kabar ?</span>
                              <span className="time">17 minutes ago</span>
                            </div>
                          </a>
                        </div>
                      </div>
                    </li>
                    <li>
                      <a className="see-all" href="javascript:void(0);">
                        See all messages<i className="fa fa-angle-right"></i>{" "}
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="nav-item dropdown hidden-caret">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    id="notifDropdown"
                    role="button"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    <i className="fa fa-bell"></i>
                    <span className="notification">4</span>
                  </a>
                  <ul
                    className="dropdown-menu notif-box animated fadeIn"
                    aria-labelledby="notifDropdown"
                  >
                    <li>
                      <div className="dropdown-title">
                        You have 4 new notification
                      </div>
                    </li>
                    <li>
                      <div className="notif-scroll scrollbar-outer">
                        <div className="notif-center">
                          <a href="#">
                            <div className="notif-icon notif-primary">
                              {" "}
                              <i className="fa fa-user-plus"></i>{" "}
                            </div>
                            <div className="notif-content">
                              <span className="block">New user registered</span>
                              <span className="time">5 minutes ago</span>
                            </div>
                          </a>
                          <a href="#">
                            <div className="notif-icon notif-success">
                              {" "}
                              <i className="fa fa-comment"></i>{" "}
                            </div>
                            <div className="notif-content">
                              <span className="block">
                                Rahmad commented on Admin
                              </span>
                              <span className="time">12 minutes ago</span>
                            </div>
                          </a>
                          <a href="#">
                            <div className="notif-img">
                              <img
                                src="/assets/img/profile2.jpg"
                                alt="Img Profile"
                              />
                            </div>
                            <div className="notif-content">
                              <span className="block">
                                Reza send messages to you
                              </span>
                              <span className="time">12 minutes ago</span>
                            </div>
                          </a>
                          <a href="#">
                            <div className="notif-icon notif-danger">
                              {" "}
                              <i className="fa fa-heart"></i>{" "}
                            </div>
                            <div className="notif-content">
                              <span className="block">Farrah liked Admin</span>
                              <span className="time">17 minutes ago</span>
                            </div>
                          </a>
                        </div>
                      </div>
                    </li>
                    <li>
                      <a className="see-all" href="javascript:void(0);">
                        See all notifications
                        <i className="fa fa-angle-right"></i>{" "}
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="nav-item dropdown hidden-caret">
                  <a
                    className="nav-link"
                    data-toggle="dropdown"
                    href="#"
                    aria-expanded="false"
                  >
                    <i className="fas fa-layer-group"></i>
                  </a>
                  <div className="dropdown-menu quick-actions quick-actions-info animated fadeIn">
                    <div className="quick-actions-header">
                      <span className="title mb-1">Quick Actions</span>
                      <span className="subtitle op-8">Shortcuts</span>
                    </div>
                    <div className="quick-actions-scroll scrollbar-outer">
                      <div className="quick-actions-items">
                        <div className="row m-0">
                          <a className="col-6 col-md-4 p-0" href="#">
                            <div className="quick-actions-item">
                              <i className="flaticon-file-1"></i>
                              <span className="text">Generated Report</span>
                            </div>
                          </a>
                          <a className="col-6 col-md-4 p-0" href="#">
                            <div className="quick-actions-item">
                              <i className="flaticon-database"></i>
                              <span className="text">Create New Database</span>
                            </div>
                          </a>
                          <a className="col-6 col-md-4 p-0" href="#">
                            <div className="quick-actions-item">
                              <i className="flaticon-pen"></i>
                              <span className="text">Create New Post</span>
                            </div>
                          </a>
                          <a className="col-6 col-md-4 p-0" href="#">
                            <div className="quick-actions-item">
                              <i className="flaticon-interface-1"></i>
                              <span className="text">Create New Task</span>
                            </div>
                          </a>
                          <a className="col-6 col-md-4 p-0" href="#">
                            <div className="quick-actions-item">
                              <i className="flaticon-list"></i>
                              <span className="text">Completed Tasks</span>
                            </div>
                          </a>
                          <a className="col-6 col-md-4 p-0" href="#">
                            <div className="quick-actions-item">
                              <i className="flaticon-file"></i>
                              <span className="text">Create New Invoice</span>
                            </div>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="nav-item dropdown hidden-caret">
                  <a
                    className="dropdown-toggle profile-pic"
                    data-toggle="dropdown"
                    href="#"
                    aria-expanded="false"
                  >
                    <div className="avatar-sm">
                      <img
                        src="/assets/img/profile.jpg"
                        alt="..."
                        className="avatar-img rounded-circle"
                      />
                    </div>
                  </a>
                  <ul className="dropdown-menu dropdown-user animated fadeIn">
                    <div className="dropdown-user-scroll scrollbar-outer">
                      <li>
                        <div className="user-box">
                          <div className="avatar-lg">
                            <img
                              src="/assets/img/profile.jpg"
                              alt="image profile"
                              className="avatar-img rounded"
                            />
                          </div>
                          <div className="u-text">
                            <h4>Hizrian</h4>
                            <p className="text-muted">hello@example.com</p>
                            <a
                              href="profile.html"
                              className="btn btn-xs btn-secondary btn-sm"
                            >
                              View Profile
                            </a>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="dropdown-divider"></div>
                        <a className="dropdown-item" href="#">
                          My Profile
                        </a>
                        <a className="dropdown-item" href="#">
                          My Balance
                        </a>
                        <a className="dropdown-item" href="#">
                          Inbox
                        </a>
                        <div className="dropdown-divider"></div>
                        <a className="dropdown-item" href="#">
                          Account Setting
                        </a>
                        <div className="dropdown-divider"></div>
                        <a className="dropdown-item" href="#">
                          Logout
                        </a>
                      </li>
                    </div>
                  </ul>
                </li>
              </ul>
            </div>
          </nav>
        </div>
        <div className="sidebar sidebar-style-2" data-background-color="dark2">
          <div className="sidebar-wrapper scrollbar scrollbar-inner">
            <div className="sidebar-content">
              <div className="user">
                <div className="avatar-sm float-left mr-2">
                  <img
                    src="/assets/img/profile.jpg"
                    alt="..."
                    className="avatar-img rounded-circle"
                  />
                </div>
                <div className="info">
                  <a
                    data-toggle="collapse"
                    href="#collapseExample"
                    aria-expanded="true"
                  >
                    <span>
                      Hizrian
                      <span className="user-level">Administrator</span>
                      <span className="caret"></span>
                    </span>
                  </a>
                  <div className="clearfix"></div>

                  <div className="collapse in" id="collapseExample">
                    <ul className="nav">
                      <li>
                        <a href="#profile">
                          <span className="link-collapse">My Profile</span>
                        </a>
                      </li>
                      <li>
                        <a href="#edit">
                          <span className="link-collapse">Edit Profile</span>
                        </a>
                      </li>
                      <li>
                        <a href="#settings">
                          <span className="link-collapse">Settings</span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <ul className="nav nav-primary">
                <li className="nav-item active">
                  <a
                    data-toggle="collapse"
                    href="#dashboard"
                    className="collapsed"
                    aria-expanded="false"
                  >
                    <i className="fas fa-home"></i>
                    <p>Dashboard</p>
                    <span className="caret"></span>
                  </a>
                  <div className="collapse" id="dashboard">
                    <ul className="nav nav-collapse">
                      <li>
                        <a href="../demo1/index.html">
                          <span className="sub-item">Dashboard 1</span>
                        </a>
                      </li>
                      <li>
                        <a href="../demo2/index.html">
                          <span className="sub-item">Dashboard 2</span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </li>
                <li className="nav-section">
                  <span className="sidebar-mini-icon">
                    <i className="fa fa-ellipsis-h"></i>
                  </span>
                  <h4 className="text-section">Components</h4>
                </li>
                <li className="nav-item">
                  <a data-toggle="collapse" href="#base">
                    <i className="fas fa-layer-group"></i>
                    <p>Base</p>
                    <span className="caret"></span>
                  </a>
                  <div className="collapse" id="base">
                    <ul className="nav nav-collapse">
                      <li>
                        <a href="components/avatars.html">
                          <span className="sub-item">Avatars</span>
                        </a>
                      </li>
                      <li>
                        <a href="components/buttons.html">
                          <span className="sub-item">Buttons</span>
                        </a>
                      </li>
                      <li>
                        <a href="components/gridsystem.html">
                          <span className="sub-item">Grid System</span>
                        </a>
                      </li>
                      <li>
                        <a href="components/panels.html">
                          <span className="sub-item">Panels</span>
                        </a>
                      </li>
                      <li>
                        <a href="components/notifications.html">
                          <span className="sub-item">Notifications</span>
                        </a>
                      </li>
                      <li>
                        <a href="components/sweetalert.html">
                          <span className="sub-item">Sweet Alert</span>
                        </a>
                      </li>
                      <li>
                        <a href="components/font-awesome-icons.html">
                          <span className="sub-item">Font Awesome Icons</span>
                        </a>
                      </li>
                      <li>
                        <a href="components/simple-line-icons.html">
                          <span className="sub-item">Simple Line Icons</span>
                        </a>
                      </li>
                      <li>
                        <a href="components/flaticons.html">
                          <span className="sub-item">Flaticons</span>
                        </a>
                      </li>
                      <li>
                        <a href="components/typography.html">
                          <span className="sub-item">Typography</span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </li>
                <li className="nav-item">
                  <a data-toggle="collapse" href="#sidebarLayouts">
                    <i className="fas fa-th-list"></i>
                    <p>Sidebar Layouts</p>
                    <span className="caret"></span>
                  </a>
                  <div className="collapse" id="sidebarLayouts">
                    <ul className="nav nav-collapse">
                      <li>
                        <a href="sidebar-style-1.html">
                          <span className="sub-item">Sidebar Style 1</span>
                        </a>
                      </li>
                      <li>
                        <a href="overlay-sidebar.html">
                          <span className="sub-item">Overlay Sidebar</span>
                        </a>
                      </li>
                      <li>
                        <a href="compact-sidebar.html">
                          <span className="sub-item">Compact Sidebar</span>
                        </a>
                      </li>
                      <li>
                        <a href="static-sidebar.html">
                          <span className="sub-item">Static Sidebar</span>
                        </a>
                      </li>
                      <li>
                        <a href="icon-menu.html">
                          <span className="sub-item">Icon Menu</span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </li>
                <li className="nav-item">
                  <a data-toggle="collapse" href="#forms">
                    <i className="fas fa-pen-square"></i>
                    <p>Forms</p>
                    <span className="caret"></span>
                  </a>
                  <div className="collapse" id="forms">
                    <ul className="nav nav-collapse">
                      <li>
                        <a href="forms/forms.html">
                          <span className="sub-item">Basic Form</span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </li>
                <li className="nav-item">
                  <a data-toggle="collapse" href="#tables">
                    <i className="fas fa-table"></i>
                    <p>Tables</p>
                    <span className="caret"></span>
                  </a>
                  <div className="collapse" id="tables">
                    <ul className="nav nav-collapse">
                      <li>
                        <a href="tables/tables.html">
                          <span className="sub-item">Basic Table</span>
                        </a>
                      </li>
                      <li>
                        <a href="tables/datatables.html">
                          <span className="sub-item">Datatables</span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </li>
                <li className="nav-item">
                  <a data-toggle="collapse" href="#maps">
                    <i className="fas fa-map-marker-alt"></i>
                    <p>Maps</p>
                    <span className="caret"></span>
                  </a>
                  <div className="collapse" id="maps">
                    <ul className="nav nav-collapse">
                      <li>
                        <a href="maps/jqvmap.html">
                          <span className="sub-item">JQVMap</span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </li>
                <li className="nav-item">
                  <a data-toggle="collapse" href="#charts">
                    <i className="far fa-chart-bar"></i>
                    <p>Charts</p>
                    <span className="caret"></span>
                  </a>
                  <div className="collapse" id="charts">
                    <ul className="nav nav-collapse">
                      <li>
                        <a href="charts/charts.html">
                          <span className="sub-item">Chart Js</span>
                        </a>
                      </li>
                      <li>
                        <a href="charts/sparkline.html">
                          <span className="sub-item">Sparkline</span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </li>
                <li className="nav-item">
                  <a href="widgets.html">
                    <i className="fas fa-desktop"></i>
                    <p>Widgets</p>
                    <span className="badge badge-success">4</span>
                  </a>
                </li>
                <li className="nav-item">
                  <a data-toggle="collapse" href="#submenu">
                    <i className="fas fa-bars"></i>
                    <p>Menu Levels</p>
                    <span className="caret"></span>
                  </a>
                  <div className="collapse" id="submenu">
                    <ul className="nav nav-collapse">
                      <li>
                        <a data-toggle="collapse" href="#subnav1">
                          <span className="sub-item">Level 1</span>
                          <span className="caret"></span>
                        </a>
                        <div className="collapse" id="subnav1">
                          <ul className="nav nav-collapse subnav">
                            <li>
                              <a href="#">
                                <span className="sub-item">Level 2</span>
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <span className="sub-item">Level 2</span>
                              </a>
                            </li>
                          </ul>
                        </div>
                      </li>
                      <li>
                        <a data-toggle="collapse" href="#subnav2">
                          <span className="sub-item">Level 1</span>
                          <span className="caret"></span>
                        </a>
                        <div className="collapse" id="subnav2">
                          <ul className="nav nav-collapse subnav">
                            <li>
                              <a href="#">
                                <span className="sub-item">Level 2</span>
                              </a>
                            </li>
                          </ul>
                        </div>
                      </li>
                      <li>
                        <a href="#">
                          <span className="sub-item">Level 1</span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </li>
                <li className="mx-4 mt-2">
                  <a
                    href="http://themekita.com/atlantis-bootstrap-dashboard.html"
                    className="btn btn-primary btn-block"
                  >
                    <span className="btn-label mr-2">
                      {" "}
                      <i className="fa fa-heart"></i>{" "}
                    </span>
                    Buy Pro
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="main-panel">
          <div className="content">
            <div className="page-inner">
              <div className="mt-2 mb-4">
                <h2 className="text-white pb-2">Welcome back, Hizrian!</h2>
                <h5 className="text-white op-7 mb-4">
                  Yesterday I was clever, so I wanted to change the world. Today
                  I am wise, so I am changing myself.
                </h5>
              </div>
              <div className="row">
                <div className="col-md-4">
                  <div className="card card-dark bg-primary-gradient">
                    <div className="card-body pb-0">
                      <div className="h1 fw-bold float-right">+5%</div>
                      <h2 className="mb-2">17</h2>
                      <p>Users online</p>
                      <div className="pull-in sparkline-fix chart-as-background">
                        <div id="lineChart">
                          <canvas
                            width="327"
                            height="70"
                            style={{
                              display: "inline-block",
                              width: "327px",
                              height: "70px",
                              verticalAlign: "top"
                            }}
                          ></canvas>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="card card-dark bg-secondary-gradient">
                    <div className="card-body pb-0">
                      <div className="h1 fw-bold float-right">-3%</div>
                      <h2 className="mb-2">27</h2>
                      <p>New Users</p>
                      <div className="pull-in sparkline-fix chart-as-background">
                        <div id="lineChart2">
                          <canvas
                            width="327"
                            height="70"
                            style={{
                              display: "inline-block",
                              width: "327px",
                              height: "70px",
                              verticalAlign: "top"
                            }}
                          ></canvas>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="card card-dark bg-success2">
                    <div className="card-body pb-0">
                      <div className="h1 fw-bold float-right">+7%</div>
                      <h2 className="mb-2">213</h2>
                      <p>Transactions</p>
                      <div className="pull-in sparkline-fix chart-as-background">
                        <div id="lineChart3">
                          <canvas
                            width="327"
                            height="70"
                            style={{
                              display: "inline-block",
                              width: "327px",
                              height: "70px",
                              verticalAlign: "top"
                            }}
                          ></canvas>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-8">
                  <div className="card">
                    <div className="card-header">
                      <div className="card-head-row">
                        <div className="card-title">User Statistics</div>
                        <div className="card-tools">
                          <a
                            href="#"
                            className="btn btn-info btn-border btn-round btn-sm mr-2"
                          >
                            <span className="btn-label">
                              <i className="fa fa-pencil"></i>
                            </span>
                            Export
                          </a>
                          <a
                            href="#"
                            className="btn btn-info btn-border btn-round btn-sm"
                          >
                            <span className="btn-label">
                              <i className="fa fa-print"></i>
                            </span>
                            Print
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="card-body">
                      <div
                        className="chart-container"
                        style={{ minHeight: "375px" }}
                      >
                        <canvas id="statisticsChart"></canvas>
                      </div>
                      <div id="myChartLegend"></div>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="card card-secondary">
                    <div className="card-header">
                      <div className="card-title">Daily Sales</div>
                      <div className="card-category">March 25 - April 02</div>
                    </div>
                    <div className="card-body pb-0">
                      <div className="mb-4 mt-2">
                        <h1>$4,578.58</h1>
                      </div>
                      <div className="pull-in">
                        <canvas id="dailySalesChart"></canvas>
                      </div>
                    </div>
                  </div>
                  <div className="card card-primary bg-primary-gradient">
                    <div className="card-body">
                      <h4 className="mb-1 fw-bold">Tasks Progress</h4>
                      <div
                        id="task-complete"
                        className="chart-circle mt-4 mb-3"
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row row-card-no-pd">
                <div className="col-md-12">
                  <div className="card">
                    <div className="card-header">
                      <div className="card-head-row">
                        <h4 className="card-title">Users Geolocation</h4>
                        <div className="card-tools">
                          <button className="btn btn-icon btn-link btn-primary btn-xs">
                            <span className="fa fa-angle-down"></span>
                          </button>
                          <button className="btn btn-icon btn-link btn-primary btn-xs btn-refresh-card">
                            <span className="fa fa-sync-alt"></span>
                          </button>
                          <button className="btn btn-icon btn-link btn-primary btn-xs">
                            <span className="fa fa-times"></span>
                          </button>
                        </div>
                      </div>
                      <p className="card-category">
                        Map of the distribution of users around the world
                      </p>
                    </div>
                    <div className="card-body">
                      <div className="row">
                        <div className="col-md-6">
                          <div className="table-responsive table-hover table-sales">
                            <table className="table">
                              <tbody>
                                <tr>
                                  <td>
                                    <div className="flag">
                                      <img
                                        src="/assets/img/flags/id.png"
                                        alt="indonesia"
                                      />
                                    </div>
                                  </td>
                                  <td>Indonesia</td>
                                  <td className="text-right">2.320</td>
                                  <td className="text-right">42.18%</td>
                                </tr>
                                <tr>
                                  <td>
                                    <div className="flag">
                                      <img
                                        src="/assets/img/flags/us.png"
                                        alt="united states"
                                      />
                                    </div>
                                  </td>
                                  <td>USA</td>
                                  <td className="text-right">240</td>
                                  <td className="text-right">4.36%</td>
                                </tr>
                                <tr>
                                  <td>
                                    <div className="flag">
                                      <img
                                        src="/assets/img/flags/au.png"
                                        alt="australia"
                                      />
                                    </div>
                                  </td>
                                  <td>Australia</td>
                                  <td className="text-right">119</td>
                                  <td className="text-right">2.16%</td>
                                </tr>
                                <tr>
                                  <td>
                                    <div className="flag">
                                      <img
                                        src="/assets/img/flags/ru.png"
                                        alt="russia"
                                      />
                                    </div>
                                  </td>
                                  <td>Russia</td>
                                  <td className="text-right">1.081</td>
                                  <td className="text-right">19.65%</td>
                                </tr>
                                <tr>
                                  <td>
                                    <div className="flag">
                                      <img
                                        src="/assets/img/flags/cn.png"
                                        alt="china"
                                      />
                                    </div>
                                  </td>
                                  <td>China</td>
                                  <td className="text-right">1.100</td>
                                  <td className="text-right">20%</td>
                                </tr>
                                <tr>
                                  <td>
                                    <div className="flag">
                                      <img
                                        src="/assets/img/flags/br.png"
                                        alt="brazil"
                                      />
                                    </div>
                                  </td>
                                  <td>Brasil</td>
                                  <td className="text-right">640</td>
                                  <td className="text-right">11.63%</td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="mapcontainer">
                            <div id="map-example" className="vmap"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-4">
                  <div className="card">
                    <div className="card-header">
                      <div className="card-title">Top Products</div>
                    </div>
                    <div className="card-body pb-0">
                      <div className="d-flex">
                        <div className="avatar">
                          <img
                            src="/assets/img/logoproduct.svg"
                            alt="..."
                            className="avatar-img rounded-circle"
                          />
                        </div>
                        <div className="flex-1 pt-1 ml-2">
                          <h6 className="fw-bold mb-1">CSS</h6>
                          <small className="text-muted">
                            Cascading Style Sheets
                          </small>
                        </div>
                        <div className="d-flex ml-auto align-items-center">
                          <h3 className="text-info fw-bold">+$17</h3>
                        </div>
                      </div>
                      <div className="separator-dashed"></div>
                      <div className="d-flex">
                        <div className="avatar">
                          <img
                            src="/assets/img/logoproduct.svg"
                            alt="..."
                            className="avatar-img rounded-circle"
                          />
                        </div>
                        <div className="flex-1 pt-1 ml-2">
                          <h6 className="fw-bold mb-1">J.CO Donuts</h6>
                          <small className="text-muted">The Best Donuts</small>
                        </div>
                        <div className="d-flex ml-auto align-items-center">
                          <h3 className="text-info fw-bold">+$300</h3>
                        </div>
                      </div>
                      <div className="separator-dashed"></div>
                      <div className="d-flex">
                        <div className="avatar">
                          <img
                            src="/assets/img/logoproduct3.svg"
                            alt="..."
                            className="avatar-img rounded-circle"
                          />
                        </div>
                        <div className="flex-1 pt-1 ml-2">
                          <h6 className="fw-bold mb-1">Ready Pro</h6>
                          <small className="text-muted">
                            Bootstrap 4 Admin Dashboard
                          </small>
                        </div>
                        <div className="d-flex ml-auto align-items-center">
                          <h3 className="text-info fw-bold">+$350</h3>
                        </div>
                      </div>
                      <div className="separator-dashed"></div>
                      <div className="pull-in">
                        <canvas id="topProductsChart"></canvas>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="card">
                    <div className="card-body">
                      <div className="card-title fw-mediumbold">
                        Suggested People
                      </div>
                      <div className="card-list">
                        <div className="item-list">
                          <div className="avatar">
                            <img
                              src="/assets/img/jm_denis.jpg"
                              alt="..."
                              className="avatar-img rounded-circle"
                            />
                          </div>
                          <div className="info-user ml-3">
                            <div className="username">Jimmy Denis</div>
                            <div className="status">Graphic Designer</div>
                          </div>
                          <button className="btn btn-icon btn-primary btn-round btn-xs">
                            <i className="fa fa-plus"></i>
                          </button>
                        </div>
                        <div className="item-list">
                          <div className="avatar">
                            <img
                              src="/assets/img/chadengle.jpg"
                              alt="..."
                              className="avatar-img rounded-circle"
                            />
                          </div>
                          <div className="info-user ml-3">
                            <div className="username">Chad</div>
                            <div className="status">CEO Zeleaf</div>
                          </div>
                          <button className="btn btn-icon btn-primary btn-round btn-xs">
                            <i className="fa fa-plus"></i>
                          </button>
                        </div>
                        <div className="item-list">
                          <div className="avatar">
                            <img
                              src="/assets/img/talha.jpg"
                              alt="..."
                              className="avatar-img rounded-circle"
                            />
                          </div>
                          <div className="info-user ml-3">
                            <div className="username">Talha</div>
                            <div className="status">Front End Designer</div>
                          </div>
                          <button className="btn btn-icon btn-primary btn-round btn-xs">
                            <i className="fa fa-plus"></i>
                          </button>
                        </div>
                        <div className="item-list">
                          <div className="avatar">
                            <img
                              src="/assets/img/mlane.jpg"
                              alt="..."
                              className="avatar-img rounded-circle"
                            />
                          </div>
                          <div className="info-user ml-3">
                            <div className="username">John Doe</div>
                            <div className="status">Back End Developer</div>
                          </div>
                          <button className="btn btn-icon btn-primary btn-round btn-xs">
                            <i className="fa fa-plus"></i>
                          </button>
                        </div>
                        <div className="item-list">
                          <div className="avatar">
                            <img
                              src="/assets/img/talha.jpg"
                              alt="..."
                              className="avatar-img rounded-circle"
                            />
                          </div>
                          <div className="info-user ml-3">
                            <div className="username">Talha</div>
                            <div className="status">Front End Designer</div>
                          </div>
                          <button className="btn btn-icon btn-primary btn-round btn-xs">
                            <i className="fa fa-plus"></i>
                          </button>
                        </div>
                        <div className="item-list">
                          <div className="avatar">
                            <img
                              src="/assets/img/jm_denis.jpg"
                              alt="..."
                              className="avatar-img rounded-circle"
                            />
                          </div>
                          <div className="info-user ml-3">
                            <div className="username">Jimmy Denis</div>
                            <div className="status">Graphic Designer</div>
                          </div>
                          <button className="btn btn-icon btn-primary btn-round btn-xs">
                            <i className="fa fa-plus"></i>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="card card-primary bg-primary-gradient">
                    <div className="card-body">
                      <h4 className="mt-3 b-b1 pb-2 mb-4 fw-bold">
                        Active user right now
                      </h4>
                      <h1 className="mb-4 fw-bold">17</h1>
                      <h4 className="mt-3 b-b1 pb-2 mb-5 fw-bold">
                        Page view per minutes
                      </h4>
                      <div id="activeUsersChart"></div>
                      <h4 className="mt-5 pb-3 mb-0 fw-bold">
                        Top active pages
                      </h4>
                      <ul className="list-unstyled">
                        <li className="d-flex justify-content-between pb-1 pt-1">
                          <small>/product/readypro/index.html</small>{" "}
                          <span>7</span>
                        </li>
                        <li className="d-flex justify-content-between pb-1 pt-1">
                          <small>/product/atlantis/demo.html</small>{" "}
                          <span>10</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6">
                  <div className="card">
                    <div className="card-header">
                      <div className="card-title">Feed Activity</div>
                    </div>
                    <div className="card-body">
                      <ol className="activity-feed">
                        <li className="feed-item feed-item-secondary">
                          <time className="date" datetime="9-25">
                            Sep 25
                          </time>
                          <span className="text">
                            Responded to need{" "}
                            <a href="#">"Volunteer opportunity"</a>
                          </span>
                        </li>
                        <li className="feed-item feed-item-success">
                          <time className="date" datetime="9-24">
                            Sep 24
                          </time>
                          <span className="text">
                            Added an interest{" "}
                            <a href="#">"Volunteer Activities"</a>
                          </span>
                        </li>
                        <li className="feed-item feed-item-info">
                          <time className="date" datetime="9-23">
                            Sep 23
                          </time>
                          <span className="text">
                            Joined the group{" "}
                            <a href="single-group.php">"Boardsmanship Forum"</a>
                          </span>
                        </li>
                        <li className="feed-item feed-item-warning">
                          <time className="date" datetime="9-21">
                            Sep 21
                          </time>
                          <span className="text">
                            Responded to need{" "}
                            <a href="#">"In-Kind Opportunity"</a>
                          </span>
                        </li>
                        <li className="feed-item feed-item-danger">
                          <time className="date" datetime="9-18">
                            Sep 18
                          </time>
                          <span className="text">
                            Created need <a href="#">"Volunteer Opportunity"</a>
                          </span>
                        </li>
                        <li className="feed-item">
                          <time className="date" datetime="9-17">
                            Sep 17
                          </time>
                          <span className="text">
                            Attending the event{" "}
                            <a href="single-event.php">"Some New Event"</a>
                          </span>
                        </li>
                      </ol>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="card">
                    <div className="card-header">
                      <div className="card-head-row">
                        <div className="card-title">Support Tickets</div>
                        <div className="card-tools">
                          <ul
                            className="nav nav-pills nav-secondary nav-pills-no-bd nav-sm"
                            id="pills-tab"
                            role="tablist"
                          >
                            <li className="nav-item">
                              <a
                                className="nav-link"
                                id="pills-today"
                                data-toggle="pill"
                                href="#pills-today"
                                role="tab"
                                aria-selected="true"
                              >
                                Today
                              </a>
                            </li>
                            <li className="nav-item">
                              <a
                                className="nav-link active"
                                id="pills-week"
                                data-toggle="pill"
                                href="#pills-week"
                                role="tab"
                                aria-selected="false"
                              >
                                Week
                              </a>
                            </li>
                            <li className="nav-item">
                              <a
                                className="nav-link"
                                id="pills-month"
                                data-toggle="pill"
                                href="#pills-month"
                                role="tab"
                                aria-selected="false"
                              >
                                Month
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="card-body">
                      <div className="d-flex">
                        <div className="avatar avatar-online">
                          <span className="avatar-title rounded-circle border border-white bg-info">
                            J
                          </span>
                        </div>
                        <div className="flex-1 ml-3 pt-1">
                          <h6 className="text-uppercase fw-bold mb-1">
                            Joko Subianto{" "}
                            <span className="text-warning pl-3">pending</span>
                          </h6>
                          <span className="text-muted">
                            I am facing some trouble with my viewport. When i
                            start my
                          </span>
                        </div>
                        <div className="float-right pt-1">
                          <small className="text-muted">8:40 PM</small>
                        </div>
                      </div>
                      <div className="separator-dashed"></div>
                      <div className="d-flex">
                        <div className="avatar avatar-offline">
                          <span className="avatar-title rounded-circle border border-white bg-secondary">
                            P
                          </span>
                        </div>
                        <div className="flex-1 ml-3 pt-1">
                          <h6 className="text-uppercase fw-bold mb-1">
                            Prabowo Widodo{" "}
                            <span className="text-success pl-3">open</span>
                          </h6>
                          <span className="text-muted">
                            I have some query regarding the license issue.
                          </span>
                        </div>
                        <div className="float-right pt-1">
                          <small className="text-muted">1 Day Ago</small>
                        </div>
                      </div>
                      <div className="separator-dashed"></div>
                      <div className="d-flex">
                        <div className="avatar avatar-away">
                          <span className="avatar-title rounded-circle border border-white bg-danger">
                            L
                          </span>
                        </div>
                        <div className="flex-1 ml-3 pt-1">
                          <h6 className="text-uppercase fw-bold mb-1">
                            Lee Chong Wei{" "}
                            <span className="text-muted pl-3">closed</span>
                          </h6>
                          <span className="text-muted">
                            Is there any update plan for RTL version near
                            future?
                          </span>
                        </div>
                        <div className="float-right pt-1">
                          <small className="text-muted">2 Days Ago</small>
                        </div>
                      </div>
                      <div className="separator-dashed"></div>
                      <div className="d-flex">
                        <div className="avatar avatar-offline">
                          <span className="avatar-title rounded-circle border border-white bg-secondary">
                            P
                          </span>
                        </div>
                        <div className="flex-1 ml-3 pt-1">
                          <h6 className="text-uppercase fw-bold mb-1">
                            Peter Parker{" "}
                            <span className="text-success pl-3">open</span>
                          </h6>
                          <span className="text-muted">
                            I have some query regarding the license issue.
                          </span>
                        </div>
                        <div className="float-right pt-1">
                          <small className="text-muted">2 Day Ago</small>
                        </div>
                      </div>
                      <div className="separator-dashed"></div>
                      <div className="d-flex">
                        <div className="avatar avatar-away">
                          <span className="avatar-title rounded-circle border border-white bg-danger">
                            L
                          </span>
                        </div>
                        <div className="flex-1 ml-3 pt-1">
                          <h6 className="text-uppercase fw-bold mb-1">
                            Logan Paul{" "}
                            <span className="text-muted pl-3">closed</span>
                          </h6>
                          <span className="text-muted">
                            Is there any update plan for RTL version near
                            future?
                          </span>
                        </div>
                        <div className="float-right pt-1">
                          <small className="text-muted">2 Days Ago</small>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <footer className="footer">
            <div className="container-fluid">
              <nav className="pull-left">
                <ul className="nav">
                  <li className="nav-item">
                    <a className="nav-link" href="https://www.themekita.com">
                      ThemeKita
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      Help
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      Licenses
                    </a>
                  </li>
                </ul>
              </nav>
              <div className="copyright ml-auto">
                2018, made with{" "}
                <i className="fa fa-heart heart text-danger"></i> by{" "}
                <a href="https://www.themekita.com">ThemeKita</a>
              </div>
            </div>
          </footer>
        </div>
        <div className="custom-template">
          <div className="title">Settings</div>
          <div className="custom-content">
            <div className="switcher">
              <div className="switch-block">
                <h4>Logo Header</h4>
                <div className="btnSwitch">
                  <button
                    type="button"
                    className="changeLogoHeaderColor"
                    data-color="dark"
                  ></button>
                  <button
                    type="button"
                    className="changeLogoHeaderColor"
                    data-color="blue"
                  ></button>
                  <button
                    type="button"
                    className="changeLogoHeaderColor"
                    data-color="purple"
                  ></button>
                  <button
                    type="button"
                    className="changeLogoHeaderColor"
                    data-color="light-blue"
                  ></button>
                  <button
                    type="button"
                    className="changeLogoHeaderColor"
                    data-color="green"
                  ></button>
                  <button
                    type="button"
                    className="changeLogoHeaderColor"
                    data-color="orange"
                  ></button>
                  <button
                    type="button"
                    className="changeLogoHeaderColor"
                    data-color="red"
                  ></button>
                  <button
                    type="button"
                    className="changeLogoHeaderColor"
                    data-color="white"
                  ></button>
                  <br />
                  <button
                    type="button"
                    className="selected changeLogoHeaderColor"
                    data-color="dark2"
                  ></button>
                  <button
                    type="button"
                    className="changeLogoHeaderColor"
                    data-color="blue2"
                  ></button>
                  <button
                    type="button"
                    className="changeLogoHeaderColor"
                    data-color="purple2"
                  ></button>
                  <button
                    type="button"
                    className="changeLogoHeaderColor"
                    data-color="light-blue2"
                  ></button>
                  <button
                    type="button"
                    className="changeLogoHeaderColor"
                    data-color="green2"
                  ></button>
                  <button
                    type="button"
                    className="changeLogoHeaderColor"
                    data-color="orange2"
                  ></button>
                  <button
                    type="button"
                    className="changeLogoHeaderColor"
                    data-color="red2"
                  ></button>
                </div>
              </div>
              <div className="switch-block">
                <h4>Navbar Header</h4>
                <div className="btnSwitch">
                  <button
                    type="button"
                    className="selected changeTopBarColor"
                    data-color="dark"
                  ></button>
                  <button
                    type="button"
                    className="changeTopBarColor"
                    data-color="blue"
                  ></button>
                  <button
                    type="button"
                    className="changeTopBarColor"
                    data-color="purple"
                  ></button>
                  <button
                    type="button"
                    className="changeTopBarColor"
                    data-color="light-blue"
                  ></button>
                  <button
                    type="button"
                    className="changeTopBarColor"
                    data-color="green"
                  ></button>
                  <button
                    type="button"
                    className="changeTopBarColor"
                    data-color="orange"
                  ></button>
                  <button
                    type="button"
                    className="changeTopBarColor"
                    data-color="red"
                  ></button>
                  <button
                    type="button"
                    className="changeTopBarColor"
                    data-color="white"
                  ></button>
                  <br />
                  <button
                    type="button"
                    className="changeTopBarColor"
                    data-color="dark2"
                  ></button>
                  <button
                    type="button"
                    className="changeTopBarColor"
                    data-color="blue2"
                  ></button>
                  <button
                    type="button"
                    className="changeTopBarColor"
                    data-color="purple2"
                  ></button>
                  <button
                    type="button"
                    className="changeTopBarColor"
                    data-color="light-blue2"
                  ></button>
                  <button
                    type="button"
                    className="changeTopBarColor"
                    data-color="green2"
                  ></button>
                  <button
                    type="button"
                    className="changeTopBarColor"
                    data-color="orange2"
                  ></button>
                  <button
                    type="button"
                    className="changeTopBarColor"
                    data-color="red2"
                  ></button>
                </div>
              </div>
              <div className="switch-block">
                <h4>Sidebar</h4>
                <div className="btnSwitch">
                  <button
                    type="button"
                    className="changeSideBarColor"
                    data-color="white"
                  ></button>
                  <button
                    type="button"
                    className="changeSideBarColor"
                    data-color="dark"
                  ></button>
                  <button
                    type="button"
                    className="selected changeSideBarColor"
                    data-color="dark2"
                  ></button>
                </div>
              </div>
              <div className="switch-block">
                <h4>Background</h4>
                <div className="btnSwitch">
                  <button
                    type="button"
                    className="changeBackgroundColor"
                    data-color="bg2"
                  ></button>
                  <button
                    type="button"
                    className="changeBackgroundColor selected"
                    data-color="bg1"
                  ></button>
                  <button
                    type="button"
                    className="changeBackgroundColor"
                    data-color="bg3"
                  ></button>
                  <button
                    type="button"
                    className="selected changeBackgroundColor"
                    data-color="dark"
                  ></button>
                </div>
              </div>
            </div>
          </div>
          <div className="custom-toggle">
            <i className="flaticon-settings"></i>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
