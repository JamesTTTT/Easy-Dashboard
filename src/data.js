import {
  AiFillHome,
  AiOutlineAreaChart,
  AiOutlineTeam,
  AiFillBell,
  AiFillSetting,
} from "react-icons/ai";
export const navigationItems = [
  {
    title: "Home",
    route: "/",
    icon: <AiFillHome />,
  },
  {
    title: "Analytics",
    route: "/analytics",
    icon: <AiOutlineAreaChart />,
  },
  {
    title: "Customers",
    route: "/customers",
    icon: <AiOutlineTeam />,
  },
  {
    title: "Alerts",
    route: "/alerts",
    icon: <AiFillBell />,
  },
  {
    title: "Settings",
    route: "/settings",
    icon: <AiFillSetting />,
  },
];
