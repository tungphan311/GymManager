import { NAV_LIST } from "constants/index";
import React from "react";
import HeaderItem from "Components/Section/HeaderItem";

function Section() {
  return (
    <section className="section section-pricing-detail mb-0">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-7 content-text m-b-md-3">
            <ul className="tag-inline tag-col-3 nav nav-tabs m-b-24px m-t-md-3 d-block text-center">
              {NAV_LIST.map(({ title, href, data, active }) => (
                <HeaderItem
                  key={title}
                  title={title}
                  href={href}
                  data={data}
                  active={active}
                />
              ))}
            </ul>
            <div className="tab-content">
              <div className="tab-pane fade active show" id="package-list-0">
                <div className="row align-items-center">
                  <div className="col-md-6 item-selection-wrapper">
                    <div className="item-selection nav nav-tabs border-bottom-0">
                      <a
                        className="item-month active"
                        href="#package-classic-0"
                        data-toggle="tab"
                      >
                        <div className="title">14</div> tháng
                      </a>

                      <a
                        className="item-month"
                        href="#package-classic-1"
                        data-toggle="tab"
                      >
                        <div className="title">6</div> tháng
                      </a>

                      <a
                        className="item-month"
                        href="#package-classic-2"
                        data-toggle="tab"
                      >
                        <div className="title">3</div> tháng
                      </a>

                      <a
                        className="item-month"
                        href="#package-classic-3"
                        data-toggle="tab"
                      >
                        <div className="title">1</div> tháng
                      </a>
                    </div>
                  </div>
                  <div className="col-md-6 item-content-wrapper">
                    <div className="item-content tab-content p-y-12px">
                      <ul
                        className="tab-pane fade active show"
                        id="package-classic-0"
                      >
                        <li>
                          <div className="label-text">Thời gian tập luyện:</div>
                          <div className="label-title">14 tháng</div>
                        </li>
                        <li>
                          <div className="label-text">Tổng chi phí:</div>
                          <div className="label-title">9,900,000 VNĐ</div>
                        </li>
                        <li>
                          <div className="label-text">Chi phí / tháng</div>
                          <div className="label-title">707,142 VNĐ</div>
                        </li>
                        <li>
                          <div className="label-text">Chi phí / ngày:</div>
                          <div className="label-title">23,571 VNĐ</div>
                        </li>
                        <li>
                          <button
                            type="submit"
                            className="btn btn-brand btn-sm"
                            data-toggle="modal"
                            data-target=".modal-sign-up"
                          >
                            Đăng ký ngay
                          </button>
                        </li>
                      </ul>

                      <ul className="tab-pane fade " id="package-classic-1">
                        <li>
                          <div className="label-text">Thời gian tập luyện:</div>
                          <div className="label-title">6 tháng</div>
                        </li>
                        <li>
                          <div className="label-text">Tổng chi phí:</div>
                          <div className="label-title">6,299,000 VNĐ</div>
                        </li>
                        <li>
                          <div className="label-text">Chi phí / tháng</div>
                          <div className="label-title">1,999,000 VNĐ</div>
                        </li>
                        <li>
                          <div className="label-text">Chi phí / ngày:</div>
                          <div className="label-title">34,900 VNĐ</div>
                        </li>
                        <li>
                          <button
                            type="submit"
                            className="btn btn-brand btn-sm"
                            data-toggle="modal"
                            data-target=".modal-sign-up"
                          >
                            Đăng ký ngay
                          </button>
                        </li>
                      </ul>

                      <ul className="tab-pane fade " id="package-classic-2">
                        <li>
                          <div className="label-text">Thời gian tập luyện:</div>
                          <div className="label-title">3 tháng</div>
                        </li>
                        <li>
                          <div className="label-text">Tổng chi phí:</div>
                          <div className="label-title">3,999,000 VNĐ</div>
                        </li>
                        <li>
                          <div className="label-text">Chi phí / tháng</div>
                          <div className="label-title">1,333,000 VNĐ</div>
                        </li>
                        <li>
                          <div className="label-text">Chi phí / ngày:</div>
                          <div className="label-title">44,400 VNĐ</div>
                        </li>
                        <li>
                          <button
                            type="submit"
                            className="btn btn-brand btn-sm"
                            data-toggle="modal"
                            data-target=".modal-sign-up"
                          >
                            Đăng ký ngay
                          </button>
                        </li>
                      </ul>

                      <ul className="tab-pane fade " id="package-classic-3">
                        <li>
                          <div className="label-text">Thời gian tập luyện:</div>
                          <div className="label-title">1 tháng</div>
                        </li>
                        <li>
                          <div className="label-text">Tổng chi phí:</div>
                          <div className="label-title">1,999,000 VNĐ</div>
                        </li>
                        <li style={{ display: "none" }}>
                          <div className="label-text">Chi phí / tháng</div>
                          <div className="label-title"> VNĐ</div>
                        </li>
                        <li>
                          <div className="label-text">Chi phí / ngày:</div>
                          <div className="label-title">66,600 VNĐ</div>
                        </li>
                        <li>
                          <button
                            type="submit"
                            className="btn btn-brand btn-sm"
                            data-toggle="modal"
                            data-target=".modal-sign-up"
                          >
                            Đăng ký ngay
                          </button>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="tab-pane fade" id="package-list-1">
                <div className="row align-items-center">
                  <div className="col-md-6 item-selection-wrapper">
                    <div className="item-selection nav nav-tabs border-bottom-0">
                      <a
                        className="item-month active"
                        href="#package-citipassport-0"
                        data-toggle="tab"
                      >
                        <div className="title">36</div> tháng
                      </a>

                      <a
                        className="item-month"
                        href="#package-citipassport-1"
                        data-toggle="tab"
                      >
                        <div className="title">18</div> tháng
                      </a>
                    </div>
                  </div>
                  <div className="col-md-6 item-content-wrapper">
                    <div className="item-content tab-content p-y-12px">
                      <ul
                        className="tab-pane fade  active show"
                        id="package-citipassport-0"
                      >
                        <li>
                          <div className="label-text">Thời gian tập luyện:</div>
                          <div className="label-title">36 tháng</div>
                        </li>
                        <li>
                          <div className="label-text">Tổng chi phí:</div>
                          <div className="label-title">21,900,000 VNĐ</div>
                        </li>
                        <li>
                          <div className="label-text">Chi phí / tháng</div>
                          <div className="label-title">608,333 VNĐ</div>
                        </li>
                        <li>
                          <div className="label-text">Chi phí / ngày:</div>
                          <div className="label-title">20,277 VNĐ</div>
                        </li>
                        <li>
                          <button
                            type="submit"
                            className="btn btn-brand btn-sm"
                            data-toggle="modal"
                            data-target=".modal-sign-up"
                          >
                            Đăng ký ngay
                          </button>
                        </li>
                      </ul>

                      <ul
                        className="tab-pane fade "
                        id="package-citipassport-1"
                      >
                        <li>
                          <div className="label-text">Thời gian tập luyện:</div>
                          <div className="label-title">18 tháng</div>
                        </li>
                        <li>
                          <div className="label-text">Tổng chi phí:</div>
                          <div className="label-title">14,299,000 VNĐ</div>
                        </li>
                        <li>
                          <div className="label-text">Chi phí / tháng</div>
                          <div className="label-title">794,388 VNĐ</div>
                        </li>
                        <li>
                          <div className="label-text">Chi phí / ngày:</div>
                          <div className="label-title">26,444 VNĐ</div>
                        </li>
                        <li>
                          <button
                            type="submit"
                            className="btn btn-brand btn-sm"
                            data-toggle="modal"
                            data-target=".modal-sign-up"
                          >
                            Đăng ký ngay
                          </button>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="tab-pane fade" id="package-list-2">
                <div className="row align-items-center">
                  <div className="col-md-6 item-selection-wrapper">
                    <div className="item-selection nav nav-tabs border-bottom-0">
                      <a
                        className="item-month active"
                        href="#package-superior-0"
                        data-toggle="tab"
                      >
                        <div className="title">60</div> tháng
                      </a>

                      <a
                        className="item-month"
                        href="#package-superior-1"
                        data-toggle="tab"
                      >
                        <div className="title">24</div> tháng
                      </a>
                    </div>
                  </div>
                  <div className="col-md-6 item-content-wrapper">
                    <div className="item-content tab-content p-y-12px">
                      <ul
                        className="tab-pane fade  active show"
                        id="package-superior-0"
                      >
                        <li>
                          <div className="label-text">Thời gian tập luyện:</div>
                          <div className="label-title">60 tháng</div>
                        </li>
                        <li>
                          <div className="label-text">Tổng chi phí:</div>
                          <div className="label-title">87,500,000 VNĐ</div>
                        </li>
                        <li>
                          <div className="label-text">Chi phí / tháng</div>
                          <div className="label-title">1,459,000 VNĐ</div>
                        </li>
                        <li>
                          <div className="label-text">Chi phí / ngày:</div>
                          <div className="label-title">48,611 VNĐ</div>
                        </li>
                        <li>
                          <button
                            type="submit"
                            className="btn btn-brand btn-sm"
                            data-toggle="modal"
                            data-target=".modal-sign-up"
                          >
                            Đăng ký ngay
                          </button>
                        </li>
                      </ul>

                      <ul className="tab-pane fade " id="package-superior-1">
                        <li>
                          <div className="label-text">Thời gian tập luyện:</div>
                          <div className="label-title">24 tháng</div>
                        </li>
                        <li>
                          <div className="label-text">Tổng chi phí:</div>
                          <div className="label-title">49,900,000 VNĐ</div>
                        </li>
                        <li>
                          <div className="label-text">Chi phí / tháng</div>
                          <div className="label-title">2,079,166 VNĐ</div>
                        </li>
                        <li>
                          <div className="label-text">Chi phí / ngày:</div>
                          <div className="label-title">69,305 VNĐ</div>
                        </li>
                        <li>
                          <button
                            type="submit"
                            className="btn btn-brand btn-sm"
                            data-toggle="modal"
                            data-target=".modal-sign-up"
                          >
                            Đăng ký ngay
                          </button>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-5 content-bg stripe-section">
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
