export const SIDEBAR_LIST = [
  {
    id: "dashboard",
    icon: "fas fa-home",
    title: "Trang chủ",
    href: "/",
    roleids: [1, 2, 3, 4, 5]
  },
  {
    id: "seller",
    icon: "fas fa-coins",
    title: "Đăng ký gói tập",
    href: "/sell-courses",
    roleids: [1, 3]
  },
  {
    id: "staff",
    icon: "fas fa-users",
    title: "Nhân viên",
    href: "/staffs",
    sub: [
      { href: "/staffs/add", title: "Thêm nhân viên mới" },
      { href: "/staffs", title: "Danh sách nhân viên" }
    ],
    roleids: [1]
  },
  {
    id: "member",
    icon: "fas fa-user",
    title: "Hội viên",
    href: "/members",
    sub: [
      { href: "/members/add", title: "Thêm hội viên mới" },
      { href: "/members", title: "Danh sách hội viên" }
    ],
    roleids: [1, 3]
  },
  {
    id: "courses",
    icon: "fas fa-layer-group",
    title: "Gói tập",
    href: "/courses",
    sub: [
      { href: "/courses/add", title: "Thêm gói tập mới" },
      { href: "/courses", title: "Danh sách gói tập" }
    ],
    roleids: [1]
  },
  {
    id: "equipment",
    icon: "fas fa-dumbbell",
    title: "Thiết bị",
    href: "/equipments",
    sub: [
      { href: "/equipments/add", title: "Thêm thiế bị mới" },
      { href: "/equipments", title: "Danh sách thiết bị" }
    ],
    roleids: [1, 5]
  }
];
