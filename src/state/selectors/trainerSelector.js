import { get } from "lodash";

export const getTrainersSelector = state => get(state, "staff.trainer") || [];
