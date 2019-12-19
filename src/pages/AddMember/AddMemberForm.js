import { GENDERS, ROLE, TYPE } from "constants/index";
import React from "react";
import { Field, reduxForm } from "redux-form";
import "./AddStaffForm.scss";
import Input from "Components/Input/Input";
import { FORM_KEY_ADDSTAFF } from "state/reducers/formReducer";
import Select from "Components/Select/Select";
import DatePicker from "Components/DatePicker/DatePicker";

import {
  require,
  validName,
  validPhone,
  validD,
  email
} from "utils/FormValidate";

function AddStaffForm({ handleSubmit }) {}
