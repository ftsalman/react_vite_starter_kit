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
    tooltip: "Go to Dashboard",
    icon: <IconDashboard color="#ffff" />,
  },
  {
    label: "Enquiry",
    path: "/enquiry",
    tooltip: "Go to Enquiry",
    icon: <IconGraphBar size="20" />,
  },
  {
    label: "Admission",
    path: "",
    tooltip: "Go to Enquiry",
    icon: <IconBookOpen size="20" />,
  },
  {
    label: "Payments",
    path: "",
    tooltip: "Go to Enquiry",
    icon: <IconWallet size="20" />,
  },
  {
    label: "Master",
    path: "/master",
    tooltip: "Go to Enquiry",
    icon: <Iconsheld size="20" />,
    hasSubMenu: true,
    subMenu: [
      {
        path: "course-categories",
        label:"Course Categories",
        element:(
          ''
        )
      },
    ],
  },
  {
    label: "Reports",
    path: "",
    tooltip: "Go to Enquiry",
    icon: <IconCalendar size="20" />,
  },
  {
    label: "Settings",
    path: "",
    tooltip: "Go to Enquiry",
    icon: <IconSettings size="20" />,
  },
];
