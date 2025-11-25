import {
  IconBookOpen,
  IconGraphBar,
  Iconsheld,
  IconWallet,
} from "../assets/icons/InterfaceIcons";

import {
  IconCalendar,
  IconDashboard,
  IconSettings,
} from "../assets/icons/interfaceIcons2";

export const SIDEBAR_DATA = [
  {
    label: "Dashboard",
    path: "/",
    icon: <IconDashboard size="20" />,
    hasSubMenu: false,
  },
  {
    label: "Enquiry",
    path: "/enquiry",
    icon: <IconGraphBar size="20" />,
    hasSubMenu: false,
  },
  {
    label: "Admission",
    path: "/admission",
    icon: <IconBookOpen size="20" />,
    hasSubMenu: false,
  },
  {
    label: "Payments",
    path: "/payments",
    icon: <IconWallet size="20" />,
    hasSubMenu: false,
  },
  {
    label: "Master",
    path: "/master",
    icon: <Iconsheld size="20" />,
    hasSubMenu: true,
    subMenu: [
      {
        label: "Course Categories",
        path: "/master/coursecategories",
      },
      {
        label: "Course",
        path: "/master/course",
      },
    ],
  },
  {
    label: "Reports",
    path: "/reports",
    icon: <IconCalendar size="20" />,
    hasSubMenu: false,
  },
  {
    label: "Settings",
    path: "/settings",
    icon: <IconSettings size="20" />,
    hasSubMenu: false,
  },
];
