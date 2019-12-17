export const SIDEBAR_LIST = [
  {
    id: "dashboard",
    icon: "fas fa-home",
    title: "Trang chủ",
    href: "/"
  },
  {
    id: "staff",
    icon: "fas fa-users",
    title: "Nhân viên",
    href: "/staffs",
    sub: [
      { href: "/staffs/add", title: "Thêm nhân viên mới" },
      { href: "/staffs", title: "Danh sách nhân viên" }
    ]
  },
  {
    id: "member",
    icon: "fas fa-user",
    title: "Hội viên",
    href: "/member",
    sub: [
      { href: "/members/add", title: "Thêm hội viên mới" },
      { href: "/members", title: "Danh sách hội viên" }
    ]
  },
  {
    id: "courses",
    icon: "fas fa-user",
    title: "Gói tập",
    href: "/courses",
    sub: [
      { href: "/courses/add", title: "Thêm gói tập mới" },
      { href: "/courses", title: "Danh sách gói tập" }
    ]
  }
];
