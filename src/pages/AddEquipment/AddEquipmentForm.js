import { DEVICESTYPE, DEVICESSTATUS } from "constants/index";
import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import "./AddEquipmentForm.scss";
import Input from "Components/Input/Input";
import { FORM_KEY_ADDEQUIPMENT } from "state/reducers/formReducer";
import Select from "Components/Select/Select";

import { require } from "utils/FormValidate";
import TextArea from "Components/TextArea/TextArea";
import history from "state/history";

class AddEquipmentForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      init: false
    };
  }

  isEmpty = obj => {
    for (let key in obj) {
      if (obj.hasOwnProperty(key)) return false;
    }
    return true;
  };

  // componentDidUpdate = () => {
  //   if (this.props.type === "edit") {
  //     const {
  //       initialize,
  //       equipmentdata: {
  //         name,
  //         deviceid,
  //         devicestatusid,
  //         devicetypeid,
  //         description,
  //         note
  //       }
  //     } = this.props;
  //     const { defaultF } = this.state;

  //     if (!defaultF && Name) {
  //       initialize({

  //       });

  //       this.setState({ defaultF: Name });
  //     }
  //   }
  // };

  render() {
    const {
      handleSubmit,
      equipmentdata,
      initialize,
      type,
      history
    } = this.props;
    if (type === "edit") {
      const { init } = this.state;
      console.log("23", equipmentdata);
      if (this.isEmpty(equipmentdata)) return null;

      if (!init && !this.isEmpty(equipmentdata)) {
        this.setState({ init: true }, () => {
          const {
            Name,
            DeviceID,
            DeviceStatusID,
            DeviceTypeID,
            Description,
            Note
          } = equipmentdata;

          initialize({
            name: Name,
            deviceid: DeviceID,
            devicestatusid: DeviceStatusID,
            devicetypeid: DeviceTypeID,
            description: Description,
            note: Note
          });
        });
      }
    }

    return (
      <form className="addEquipmentForm" onSubmit={handleSubmit} noValidate>
        <div className="container">
          <div className="displayRow">
            <Field
              label="Mã thiết bị: *"
              name="deviceid"
              placeholder="Mã thiết bị"
              component={Input}
              validate={require}
            />
            <Field
              label="Tên thiết bị: *"
              name="name"
              placeholder="Tên thiết bị"
              component={Input}
              validate={require}
            />
          </div>
          <div className="displayRow">
            <Field
              label="Loại thiết bị: *"
              name="devicetypeid"
              component={Select}
              selectlist={DEVICESTYPE}
              validate={require}
            />
            <Field
              label="Tình trạng: *"
              name="devicestatusid"
              component={Select}
              selectlist={DEVICESSTATUS}
              validate={require}
            />
          </div>
          <Field
            label="Mô tả: *"
            name="description"
            component={TextArea}
            validate={require}
          />
          <Field label="Ghi chú:" name="note" component={TextArea} />
          <div className="group">
            <button
              type="button"
              onClick={() => history.goBack()}
              className="groupBtn btn btn-primary btn-border"
            >
              Trở về
            </button>
            <button type="submit" className="groupBtn btn btn-primary mr-0">
              Cập nhật
            </button>
          </div>
        </div>
      </form>
    );
  }
}

export default reduxForm({
  form: FORM_KEY_ADDEQUIPMENT, // a unique identifier for this form
  touchOnBlur: false
})(AddEquipmentForm);
