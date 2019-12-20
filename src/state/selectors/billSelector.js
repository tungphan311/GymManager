import { get } from "lodash";

export const getBillsSelector = state => get(state, "bill.bills") || [];
