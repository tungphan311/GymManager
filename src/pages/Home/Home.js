import React, { Component } from "react";
import "./Home.scss";
import { GET_TOP_CLASSES } from "state/reducers/courseReducer";
import { connect } from "react-redux";
import { getTopClassesSelector } from "state/selectors/courseSelector";
import { formatCurrenccy } from "utils/utils";
import { getRecentMembersSelector } from "state/selectors/index";

const mapStateToProps = state => ({
  topClasses: getTopClassesSelector(state),
  recenly: getRecentMembersSelector(state)
});

const mapDispatchToProps = dispatch => ({
  getTopClass: () => dispatch({ type: GET_TOP_CLASSES })
});

class Home extends Component {
  componentDidMount = () => {
    this.props.getTopClass();
  };

  render() {
    return (
      <div className="home__container">
        <div className="row">
          <div className="col-md-3">
            <div className="card">
              <div className="card-body p-3 text-center">
                <div className="text-right text-success">
                  6% <i className="fa fa-chevron-up"></i>
                </div>
                <div className="h1 m-0">43</div>
                <div className="text-muted mb-3">Thành viên mới</div>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card">
              <div className="card-body p-3 text-center">
                <div className="text-right text-success">
                  6% <i className="fa fa-chevron-up"></i>
                </div>
                <div className="h1 m-0">43</div>
                <div className="text-muted mb-3">Giao dịch mới</div>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card">
              <div className="card-body p-3 text-center">
                <div className="text-right text-success">
                  6% <i className="fa fa-chevron-up"></i>
                </div>
                <div className="h1 m-0">43</div>
                <div className="text-muted mb-3">Tổng doanh thu</div>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card">
              <div className="card-body p-3 text-center">
                <div className="text-right text-success">
                  6% <i className="fa fa-chevron-up"></i>
                </div>
                <div className="h1 m-0">43</div>
                <div className="text-muted mb-3">Doanh thu ngày</div>
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
                  ({ Class: { Name, Price }, TotalMoney }) => (
                    <Row name={Name} price={Price} total={TotalMoney} />
                  )
                )}
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div class="card">
              <div className="card-header">
                <div className="card-title">Hội viên mới </div>
              </div>
              <div class="card-body">
                <div class="card-list">
                  {this.props.recenly.map(({ FullName, Email }) => (
                    <User name={FullName} email={Email} />
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
  <div class="item-list">
    <div class="avatar">
      <img
        src="/assets/img/profile.png"
        alt="..."
        class="avatar-img rounded-circle"
      />
    </div>
    <div class="info-user ml-3">
      <div class="username">{name}</div>
      <div class="status">{email}</div>
    </div>
    <button class="btn btn-icon btn-primary btn-round btn-xs">
      <i class="fa fa-plus"></i>
    </button>
  </div>
);

export default connect(mapStateToProps, mapDispatchToProps)(Home);
