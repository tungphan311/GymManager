import { get } from "lodash";

export const getModalSelector = state => get(state, "modal.isOpen") || false;

export const getClassIdSelector = state => get(state, "modal.id") || 0;
