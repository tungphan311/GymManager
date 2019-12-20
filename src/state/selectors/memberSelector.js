import { get } from "lodash";

export const getMembersSelector = state => get(state, "member.members");
