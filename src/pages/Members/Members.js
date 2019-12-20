import "./Members.scss";
import React from "react";
import TableItem from "Components/TableItem/TableItem";
import { MDBCard, MDBCardBody, MDBCardTitle } from "mdbreact";
import { connect } from "react-redux";
import history from "state/history";
import { GET_MEMBER, DELETE_MEMBER } from "state/reducers/memberReducer";
import { getAllMemberSelector } from "state/selectors/index";
import { formatGender, formatDate } from "utils/utils";

const MapDispatchToProps = dispatch => ({
  getAllMember: () => dispatch({ type: GET_MEMBER }),
  deleteMember: memberID => dispatch({ type: DELETE_MEMBER, memberID })
});

const MapStateToProps = state => ({
  members: getAllMemberSelector(state)
});

class Members extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      //TODO:
    };
  }

  componentDidMount = () => {
    this.props.getAllMember();
  };

  formatMembers(listOfMembers) {
    const NewList = listOfMembers.map(item => {
      const newMemberItem = {
        ...item,
        Gender: formatGender(item.Gender),
        BirthDate: formatDate(item.BirthDate),

        Action: (
          <div className="button">
            <button className="btn btn-link btn-dark">
              <i className="fa fa-eye"></i>
            </button>
            <button
              className="btn btn-link btn-primary btn-lg"
              onClick={() => history.push("members/edit/" + item.ID)}
            >
              <i className="fa fa-edit"></i>
            </button>
            <button
              className="btn btn-link btn-danger"
              onClick={() => this.deleteMember(item.ID)}
            >
              <i className="fa fa-times"></i>
            </button>
          </div>
        )
      };
      return newMemberItem;
    });
    return NewList;
  }

  deleteMember(memberID) {
    this.props.deleteMember(memberID);
    console.log(memberID);
  }

  render() {
    let members = this.props.members;
    console.log(members);
    members = this.formatMembers(members);

    const data = {
      columns: [
        {
          label: "Họ và tên",
          field: "FullName",
          sort: "asc"
          // width: 600
        },
        {
          label: "Ngày sinh",
          field: "BirthDate",
          sort: "asc"
          // width: 150
        },

        {
          label: "Giới tính",
          field: "Gender"
          // width: 100
        },
        {
          label: "Số điện thoại",
          field: "Phone"
          // width: 100
        },
        {
          label: "Địa chỉ",
          field: "Address"
          // width: 200
        },
        {
          label: "Công cụ",
          field: "Action"
          // width: 100
        }
      ],
      rows: members
    };
    return (
      <div className="members__container">
        <MDBCard>
          <MDBCardBody>
            <MDBCardTitle>
              <div className="title__container">
                <div className="title">Danh sách hội viên</div>
                <div className="button_Add">
                  <button
                    className="btn btn-primary"
                    onClick={() => history.push("/members/add")}
                  >
                    <span className="btn-label">
                      <i className="fa fa-plus mr-2"></i>
                    </span>
                    Thêm hội viên mới
                  </button>
                </div>
              </div>
            </MDBCardTitle>
            <div className="filter__container"></div>
            {/* <MDBCardText> */}
            <TableItem dataSource={data} />
            {/* </MDBCardText> */}
          </MDBCardBody>
        </MDBCard>
      </div>
    );
  }
}

export default connect(MapStateToProps, MapDispatchToProps)(Members);
