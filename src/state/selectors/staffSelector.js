import { get } from "lodash";

export const getStaffsSelector = state => get(state, "staff.staffs") || [];
