import { get } from "lodash";

export const getModalSelector = state => get(state, "modal.isOpen") || false;
