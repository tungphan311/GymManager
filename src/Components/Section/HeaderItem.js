import React from "react";

function HeaderItem({ title, href, data, active }) {
  return (
    <li className="nav-item d-inline-block">
      <a
        data-short-title={title}
        data-package-list={data}
        className={`nav-link ${active ? "active" : ""}`}
        data-toggle="tab"
        href={href}
      >
        {title}
      </a>
    </li>
  );
}

export default HeaderItem;
