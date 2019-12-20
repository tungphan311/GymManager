import React, { Component } from "react";
import "./Home.scss";
import { GET_TOP_CLASSES } from "state/reducers/courseReducer";
import { connect } from "react-redux";
import {
  getTopClassesSelector,
  getDashboardSelector
} from "state/selectors/courseSelector";
import { formatCurrenccy } from "utils/utils";
import { getRecentMembersSelector } from "state/selectors/index";

const mapStateToProps = state => ({
  topClasses: getTopClassesSelector(state),
  recenly: getRecentMembersSelector(state),
  dashboard: getDashboardSelector(state)
});

const mapDispatchToProps = dispatch => ({
  getTopClass: () => dispatch({ type: GET_TOP_CLASSES })
});

class Home extends Component {
  componentDidMount = () => {
    this.props.getTopClass();
  };

  formatCurrency = money => {
    const current = (money / 1000000).toFixed(1);

    return `${current} M`;
  };

  render() {
    const {
      MonthMember,
      MonthBillsCount,
      TotalMoney,
      IncreaseMonthMoney
    } = this.props.dashboard;

    const today = new Date();
    const month = today.getMonth() + 1;
    return (
      <div className="home__container">
        <div className="row">
          <div className="col-md-3">
            <div className="card">
              <div className="card-body p-3 text-center">
                <div className="text-right text-success">
                  <i className="fa fa-chevron-up"></i>
                </div>
                <div className="h1 m-0">{MonthMember}</div>
                <div className="text-muted">Thành viên mới</div>
                <div className="text-muted">{`Tháng ${month}`}</div>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card">
              <div className="card-body p-3 text-center">
                <div className="text-right text-success">
                  <i className="fa fa-chevron-up"></i>
                </div>
                <div className="h1 m-0">{MonthBillsCount}</div>
                <div className="text-muted">Giao dịch mới</div>
                <div className="text-muted">{`Tháng ${month}`}</div>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card">
              <div className="card-body p-3 text-center">
                <div className="text-right text-success">
                  <i className="fa fa-chevron-up"></i>
                </div>
                <div className="h1 m-0">{this.formatCurrency(TotalMoney)}</div>
                <div className="text-muted">Tổng doanh thu</div>
                <div style={{ color: "white" }}>Tổng doanh thu</div>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card">
              <div className="card-body p-3 text-center">
                <div className="text-right text-success">
                  <i className="fa fa-chevron-up"></i>
                </div>
                <div className="h1 m-0">
                  {this.formatCurrency(IncreaseMonthMoney)}
                </div>
                <div className="text-muted">Doanh thu tháng</div>
                <div className="text-muted">{`Tháng ${month}`}</div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <div className="card">
              <div className="card-header">
                <div className="card-title">Top gói tập ưu thích</div>
              </div>
              <div className="card-body">
                {this.props.topClasses.map(
                  ({ Class: { Name, Price }, TotalMoney }, index) => (
                    <Row
                      key={index}
                      name={Name}
                      price={Price}
                      total={TotalMoney}
                    />
                  )
                )}
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="card">
              <div className="card-header">
                <div className="card-title">Hội viên mới </div>
              </div>
              <div className="card-body">
                <div className="card-list">
                  {this.props.recenly.map(({ FullName, Email }, index) => (
                    <User key={index} name={FullName} email={Email} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const Row = ({ name, price, total }) => (
  <>
    <div className="d-flex">
      <div className="flex-1 pt-1 ml-2">
        <h6 className="fw-bold mb-1">{name}</h6>
        <small className="text-muted">{`${formatCurrenccy(price)} VND`}</small>
      </div>
      <div className="d-flex ml-auto align-items-center">
        <h4 className="text-info fw-bold">{`+ ${formatCurrenccy(
          total
        )} VND`}</h4>
      </div>
    </div>
    <div className="separator-dashed"></div>
  </>
);

const User = ({ name, email }) => (
  <div className="item-list">
    <div className="avatar">
      <img
        src="/assets/img/profile.png"
        alt="..."
        className="avatar-img rounded-circle"
      />
    </div>
    <div className="info-user ml-3">
      <div className="username">{name}</div>
      <div className="status">{email}</div>
    </div>
    <button className="btn btn-icon btn-primary btn-round btn-xs">
      <i className="fa fa-plus"></i>
    </button>
  </div>
);

export default connect(mapStateToProps, mapDispatchToProps)(Home);
