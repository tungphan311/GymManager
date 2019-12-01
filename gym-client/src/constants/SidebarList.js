export const SIDEBAR_LIST = [
  {
    id: "dashboard",
    icon: "fas fa-home",
    title: "Dashboard",
    href: "/",
    sub: []
  },
  {
    id: "staff",
    icon: "fas fa-users",
    title: "Staffs",
    href: "/staffs",
    sub: [
      { href: "/staffs/add", title: "Add new staff" },
      { href: "/staffs", title: "Staff's list" }
    ]
  }
];
