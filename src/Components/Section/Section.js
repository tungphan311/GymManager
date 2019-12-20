import { NAV_LIST } from "constants/index";
import React from "react";
import HeaderItem from "Components/Section/HeaderItem";
import Content from "Components/Section/Content";

function Section({ haspt }) {
  return (
    <section className="section section-pricing-detail mb-0">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-8 content-text m-b-md-3">
            <ul className="tag-inline tag-col-3 nav nav-tabs m-b-24px m-t-md-3 d-block text-center">
              {NAV_LIST.map(({ title, href, data, active, id }) => (
                <HeaderItem
                  key={id}
                  id={id}
                  title={title}
                  href={`#${href}`}
                  data={data}
                  active={active}
                />
              ))}
            </ul>
            <div className="tab-content">
              {NAV_LIST.map(({ id, href, active }) => (
                <Content
                  key={id}
                  id={id}
                  href={href}
                  active={active}
                  haspt={haspt}
                />
              ))}
            </div>
          </div>
          <div className="col-lg-4 content-bg stripe-section">
            <div className="stripe-vector-1">
              <img src="/images/stripe-section-left-grey.svg" alt="" />
            </div>
            <div className="stripe-vector-2">
              <img src="/images/stripe-section-right-grey.svg" alt="" />
            </div>
            <div className="content-img text-center">
              <img src="/images/expert-2.png" className="content" alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Section;
