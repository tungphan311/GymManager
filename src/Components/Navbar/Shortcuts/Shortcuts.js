/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

function Shortcuts() {
  return (
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
  );
}

export default Shortcuts;
