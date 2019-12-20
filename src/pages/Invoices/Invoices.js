import React, { Component } from "react";
import "./Invoices.scss";
import TableItem from "Components/TableItem/TableItem";
import { MDBCard, MDBCardBody } from "mdbreact";
import { GET_BILL } from "state/reducers/billReducer";
import { connect } from "react-redux";
import { getBillsSelector } from "state/selectors/billSelector";
import { formatCurrenccy, formatDate } from "utils/utils";

const mapDispatchToProps = dispatch => ({
  getBills: () => dispatch({ type: GET_BILL })
});

const mapStateToProps = state => ({
  bills: getBillsSelector(state)
});

class Invoices extends Component {
  componentDidMount = () => {
    this.props.getBills();
  };

  render() {
    let { bills } = this.props;

    bills = bills.map(bill => ({
      ...bill,
      Amount: `${formatCurrenccy(bill.Amount)} đồng`,
      CreatedTime: formatDate(new Date(bill.CreatedTime))
    }));

    const data = {
      columns: [
        {
          label: "Nhân viên thực hiện",
          field: "StaffName",
          sort: "asc"
        },
        {
          label: "Hội viên đăng ký",
          field: "MemberName",
          sort: "asc"
        },
        {
          label: "Tên gói tập",
          field: "ClassName",
          sort: "asc"
        },
        {
          label: "Tổng tiền",
          field: "Amount",
          sort: "asc"
        },
        {
          label: "Ngày thực hiện",
          field: "CreatedTime",
          sort: "asc"
        }
      ],
      rows: bills
    };

    return (
      <div className="invoices__container">
        <div className="page-header">
          <ul className="breadcrumbs">
            <li className="nav-home">
              <i className="flaticon-home" />
            </li>
            <li className="separator">
              <i className="flaticon-right-arrow" />
            </li>
            <li className="nav-item submenu">
              <a href="#">Tra cứu hoá đơn</a>
            </li>
          </ul>
        </div>

        <h3 className="text-center" style={{ marginBottom: "24px" }}>
          DANH SÁCH HOÁ ĐƠN
        </h3>

        <div className="row">
          <div className="col-md-12">
            <MDBCard>
              <MDBCardBody>
                <div className="filter__container"></div>
                <TableItem dataSource={data} />
              </MDBCardBody>
            </MDBCard>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Invoices);
