import { get } from "lodash";

export const getAllMemberSelector = state =>
  get(state, "member.fullmember") || [];
export const getMembersSelector = state => get(state, "member.members") || [];

export const getRecentMembersSelector = state =>
  get(state, "member.recently") || [];

export const getMemberSelector = state => get(state, "member.memberData") || [];

export const getMemberNameSelector = state =>
  get(state, "member.memberData.FullName") || "";
