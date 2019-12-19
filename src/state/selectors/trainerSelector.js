import { get } from "lodash";

export const getTrainers = state => get(state, "staff.trainer") || [];
