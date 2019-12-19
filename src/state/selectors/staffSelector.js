import { get } from "lodash";

export const getStaffsSelector = state => get(state, "staff.staffs") || [];
export const getStaffSelector = state => get(state, "staff.staffData") || [];

export const getStaffNameSelector = state =>
  get(state, "staff.staffData.FullName") || "";
