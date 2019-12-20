import { get } from "lodash";

export const getEquipmentSelector = state =>
  get(state, "equipment.equipments") || [];
