/* eslint-disable jsx-a11y/anchor-is-valid */
import { SIDEBAR_LIST } from "constants/index";
import React from "react";
import SidebarItem from "Components/Sidebar/SidebarItem/SidebarItem";

function Sidebar() {
  return (
    <div className="sidebar sidebar-style-2">
      <div className="sidebar-wrapper scrollbar scrollbar-inner">
        <div className="sidebar-content">
          <ul className="nav nav-primary">
            {SIDEBAR_LIST.map(item => (
              <SidebarItem key={item.id} item={item} />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
