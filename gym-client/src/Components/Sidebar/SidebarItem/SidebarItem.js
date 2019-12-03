import React from "react";
import SubItem from "Components/Sidebar/SubItem/SubItem";
import { getPathname } from "utils/utils";

function SidebarItem({ item }) {
  const { id, icon, title, href, sub } = item;

  const pathname = getPathname(window.location.pathname);

  return (
    <li className={`nav-item${pathname === href ? " active" : ""}`}>
      <a data-toggle="collapse" href={`#${id}`}>
        <i className={icon}></i>
        <p>{title}</p>
        {sub.length > 0 && <span className="caret"></span>}
      </a>
      {sub.length > 0 && (
        <div className="collapse" id={id}>
          <ul className="nav nav-collapse">
            {sub.map(({ href, title }) => (
              <SubItem key={href} href={href} title={title} />
            ))}
          </ul>
        </div>
      )}
    </li>
  );
}

export default SidebarItem;
