import { get } from "lodash";

export const getEquipmentTypeSelector = state =>
  get(state, "equipmentType.equipmentTypes") || [];
