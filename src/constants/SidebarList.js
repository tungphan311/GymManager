export const SIDEBAR_LIST = [
  {
    id: "dashboard",
    icon: "fas fa-home",
    title: "Trang chủ",
    href: "/"
  },
  {
    id: "seller",
    icon: "fas fa-coins",
    title: "Đăng ký gói tập",
    href: "/sell-courses"
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
    href: "/members",
    sub: [
      { href: "/members/add", title: "Thêm hội viên mới" },
      { href: "/members", title: "Danh sách hội viên" }
    ]
  },
  {
    id: "courses",
    icon: "fas fa-layer-group",
    title: "Gói tập",
    href: "/courses",
    sub: [
      { href: "/courses/add", title: "Thêm gói tập mới" },
      { href: "/courses", title: "Danh sách gói tập" }
    ]
  },
  {
    id: "equipment",
    icon: "fas fa-dumbbell",
    title: "Thiết bị",
    href: "/equipments",
    sub: [
      { href: "/equipments/add", title: "Thêm thiế bị mới" },
      { href: "/equipments", title: "Danh sách thiết bị" }
    ]
  }
];
