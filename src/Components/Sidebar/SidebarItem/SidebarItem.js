import React from "react";
import SubItem from "Components/Sidebar/SubItem/SubItem";
import { getPathname } from "utils/utils";
import { getStaffRoleIdSelector } from "state/selectors/index";
import { connect } from "react-redux";

const mapStateToProps = state => ({
  roleid: getStaffRoleIdSelector(state)
});

function SidebarItem({ item, roleid }) {
  const { id, icon, title, href, sub, roleids } = item;

  const pathname = getPathname(window.location.pathname);

  return (
    <li
      className={`nav-item${pathname === href ? " active" : ""} ${
        roleids.includes(roleid) ? "" : "d-none"
      }`}
    >
      {sub ? (
        <>
          <a data-toggle="collapse" href={`#${id}`}>
            <i className={icon}></i>
            <p>{title}</p>
            <span className="caret"></span>
          </a>
          <div className="collapse" id={id}>
            <ul className="nav nav-collapse">
              {sub.map(({ href, title }) => (
                <SubItem key={href} href={href} title={title} />
              ))}
            </ul>
          </div>
        </>
      ) : (
        <a href={href}>
          <i className={icon}></i>
          <p>{title}</p>
        </a>
      )}
    </li>
  );
}

export default connect(mapStateToProps, null)(SidebarItem);
