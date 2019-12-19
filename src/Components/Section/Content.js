import React, { Component } from "react";

class Content extends Component {
  componentDidMount = () => {
    const { id } = this.props;
  };

  render() {
    const { href, active } = this.props;
    return (
      <div className={`tab-pane fade ${active ? "active show" : ""}`} id={href}>
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
              <ul className="tab-pane fade active show" id="package-classic-0">
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
    );
  }
}

export default Content;
