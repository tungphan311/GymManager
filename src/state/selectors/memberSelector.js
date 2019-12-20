import { get } from "lodash";

export const getMembersSelector = state => get(state, "member.members") || [];
export const getMemberSelector = state => get(state, "member.memberData") || [];

export const getMemberNameSelector = state =>
  get(state, "member.memberData.FullName") || "";
