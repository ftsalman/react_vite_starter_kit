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
    path: "/dashboard",
    icon: <IconDashboard size="20" />,
    hasSubMenu: false,
  },
  {
    label: "Enquiry",
    path: "/dashboard/enquiry",
    icon: <IconGraphBar size="20" />,
    hasSubMenu: false,
  },
  {
    label: "Admission",
    path: "/dashboard/admission", // (Create this page later if needed)
    icon: <IconBookOpen size="20" />,
    hasSubMenu: false,
  },
  {
    label: "Payments",
    path: "/dashboard/payments", // (Create this page later)
    icon: <IconWallet size="20" />,
    hasSubMenu: false,
  },
  {
    label: "Master",
    path: "/dashboard/master",
    icon: <Iconsheld size="20" />,
    hasSubMenu: true,
    subMenu: [
      {
        label: "Course Categories",
        path: "/dashboard/master/coursecategories",
      },
      {
        label: "Course",
        path: "/dashboard/master/course",
      },
    ],
  },
  {
    label: "Reports",
    path: "/dashboard/reports",
    icon: <IconCalendar size="20" />,
    hasSubMenu: false,
  },
  {
    label: "Settings",
    path: "/dashboard/settings",
    icon: <IconSettings size="20" />,
    hasSubMenu: false,
  },
];
