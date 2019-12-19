import React, { Component } from "react";
import { connect } from "react-redux";
import { GET_CLASS } from "state/reducers/courseReducer";
import { getClassesWithId } from "state/selectors/courseSelector";
import { formatCurrenccy } from "utils/utils";
import { TOGGLE_MODAL } from "state/reducers/modalReducer";

const mapDispatchToProps = dispatch => ({
  getClasses: id => dispatch({ type: GET_CLASS, id }),
  toggleModal: id => dispatch({ type: TOGGLE_MODAL, status: true, id })
});

const mapStateToProps = state => ({
  classes: id => getClassesWithId(state, id)
});

const Duration = ({ time, href, active }) => (
  <a
    className={`item-month ${active ? "active" : ""}`}
    href={`#${href}`}
    data-toggle="tab"
  >
    {time >= 30 ? (
      <>
        <div className="title">{time / 30}</div> tháng
      </>
    ) : (
      <>
        <div className="title">{time}</div> ngày
      </>
    )}
  </a>
);

const Info = ({ time, href, active, Price, toggleModal, id }) => (
  <ul className={`tab-pane fade ${active ? "active show" : ""}`} id={href}>
    <li>
      <div className="label-text">Thời gian tập luyện:</div>
      <div className="label-title">
        {time >= 30 ? `${time / 30} tháng` : `${time} ngày`}
      </div>
    </li>
    <li>
      <div className="label-text">Tổng chi phí:</div>
      <div className="label-title">{`${formatCurrenccy(Price)} VNĐ`}</div>
    </li>
    {time > 30 && (
      <li>
        <div className="label-text">Chi phí / tháng</div>
        <div className="label-title">{`${formatCurrenccy(
          (Price * 30) / time
        )} VNĐ`}</div>
      </li>
    )}
    <li>
      <div className="label-text">Chi phí / ngày:</div>
      <div className="label-title">{`${formatCurrenccy(
        Price / time
      )} VNĐ`}</div>
    </li>
    <li style={{ display: "flex", justifyContent: "center" }}>
      <button
        type="submit"
        className="btn btn-brand btn-sm"
        onClick={() => toggleModal(id)}
      >
        Đăng ký ngay
      </button>
    </li>
  </ul>
);

class Content extends Component {
  componentDidMount = () => {
    const { id, getClasses } = this.props;

    getClasses(id);
  };

  render() {
    const { href, active, id, toggleModal } = this.props;
    let classes = this.props.classes(id);

    if (classes.length === 0) return null;

    let i = 0;
    classes = classes.map(item => {
      i += 1;
      return {
        ...item,
        href: `${item.ID}-${i}`
      };
    });

    return (
      <div className={`tab-pane fade ${active ? "active show" : ""}`} id={href}>
        <div className="row align-items-center">
          <div className="col-md-6 item-selection-wrapper">
            <div className="item-selection nav nav-tabs border-bottom-0">
              {classes.map(item => (
                <Duration
                  key={item.href}
                  href={item.href}
                  time={item.DurationDays}
                  active={classes.indexOf(item) === 0}
                />
              ))}
            </div>
          </div>
          <div className="col-md-6 item-content-wrapper">
            <div className="item-content tab-content p-y-12px">
              {classes.map(item => (
                <Info
                  key={item.href}
                  id={item.ID}
                  href={item.href}
                  time={item.DurationDays}
                  Price={item.Price}
                  active={classes.indexOf(item) === 0}
                  toggleModal={toggleModal}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Content);
