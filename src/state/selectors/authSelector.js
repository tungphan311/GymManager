import { get } from "lodash";

export const getInfoToChangePassword = state => ({
  username: get(state, "auth.identity.username"),
  staffid: get(state, "auth.identity.staffid")
});
