import React, { useEffect, useState } from "react";
import { Button } from "../ui/button/Button";
import { IconBell, IconCross } from "../../assets/icons/interfaceIcons2";
import { Menu } from "../ui/Menu";
import { Link } from "react-router-dom";
import Avathar from "../ui/Avathar";

import { useI18Next } from "../../hooks/usei18next";
import { useClickOutside } from "../../hooks/useClickOutside";
import Tag from "../ui/Tag";
import EmptyBlock from "../ui/EmptyBlock";
import { List } from "../ui/List";

// ✅ Dummy data
const Notification_Dummy = [
  // {
  //   id: 1,
  //   type: "conversation",
  //   avatar:
  //     "https://i.pinimg.com/736x/38/a0/03/38a003dc3c5a71ad408165784d14aa8b.jpg",
  //   title: "Conversation Started with",
  //   person: "John Doe",
  //   message: "Review Link need help with connecting to the support Team..",
  //   time: "20 mins ago",
  // },
  // {
  //   id: 2,
  //   type: "conversation",
  //   avatar:
  //     "https://i.pinimg.com/736x/35/86/fd/3586fdce532b13c1737e694f4bd910ed.jpg",
  //   title: "Conversation Started with",
  //   person: "Sarah Lee",
  //   message: "welcome to Flowbee.io",
  //   time: "5 hours ago",
  // },
  // {
  //   id: 3,
  //   type: "assignment",
  //   icon: "👤",
  //   title: "Yogesh Assigned Conversation to",
  //   person: "Habeeb",
  //   message: "Conversation ID-#12314151",
  //   time: "Yesterday",
  // },
  // {
  //   id: 4,
  //   type: "followup",
  //   icon: "📅",
  //   title: "Follow Up Conversation has been Re-scheduled to",
  //   message: "Aug 10, 11:00 AM",
  //   subMessage: "Conversation ID-#12314151",
  //   time: "Yesterday",
  // },
  // {
  //   id: 5,
  //   type: "conversation",
  //   avatar:
  //     "https://i.pinimg.com/736x/09/a2/a8/09a2a889008220862d605d1efb1f6c5a.jpg",
  //   title: "Conversation Started with",
  //   person: "David Johnson",
  //   message: "welcome to Flowbee.io",
  //   time: "5 hours ago",
  // },
];

export const NavNotifMenu = () => {
  const { isRtl, t } = useI18Next();
  const [isNotificationMenuOpen, setIsNotificationMenuOpen] = useState(false);
  const [fetchStatus, setFetchStatus] = useState("loading"); // loading | error | default
  const [Notifications, setNotifications] = useState([]);

  const notificationMenuRef = useClickOutside(() =>
    setIsNotificationMenuOpen(false)
  );

  useEffect(() => {
    const timer = setTimeout(() => {
      setNotifications(Notification_Dummy);
      setFetchStatus("default");
    }, 2000);

    return () => clearTimeout(timer);
  }, []);
  return (
    <div className="relative flex-shrink-0" ref={notificationMenuRef}>
      <Button
        variant="tertiary"
        className="p-0 size-8 flex-shrink-0 rounded-md hover:bg-gray-50"
        title="Notifications"
        onClick={() => setIsNotificationMenuOpen((prev) => !prev)}
      >
        <IconBell size="20" filled />
      </Button>

      {/* Notification Menu */}
      {isNotificationMenuOpen && (
        <Menu
          className={`absolute mt-4 p-0 z-[60] no-scrollbar sm:min-w-[400px] max-h-[80vh] rounded-2xl ${
            isRtl ? "left-0" : "right-0"
          }`}
        >
          {/* Header */}
          <div className="sticky top-0 p-4 flex items-center justify-between gap-4 border-b border-gray-200 bg-white">
            <div className="flex items-center gap-2 flex-grow">
              <IconBell size="20" />
              <p className="text-lg font-semibold text-gray-800">
                {t("Notifications")}
              </p>
              <Tag
                size="sm"
                className="flex-shrink-0 rounded-full h-5 p-2 px-2 font-medium text-brand-secondary-600 "
                variant="yellow"
                label="0"
              />
            </div>
            <Button
              variant="tertiary"
              size="md"
              onClick={() => setIsNotificationMenuOpen(false)}
              className="size-8 p-1 flex-shrink-0 hover:bg-gray-50"
            >
              <IconCross size="20" />
            </Button>
          </div>

          {/* Notification List */}
          <div className="flex-grow overflow-y-auto no-scrollbar">
            {fetchStatus === "loading" ? (
              <div>
                {[...Array(5)].map((_, index) => (
                  <NotificationSkeleton key={index} />
                ))}
              </div>
            ) : fetchStatus === "error" ? (
              <EmptyBlock
                title="Error"
                subtitle="Failed to fetch notifications"
                primaryBtnLabel="Retry"
              />
            ) : Notifications.length === 0 ? (
              <EmptyBlock
                title="No new notifications"
                subtitle="Looks like your inbox is empty!"
                showPrimaryBtn={false}
              />
            ) : (
              <List
                className="flex flex-col gap-0 divide-y divide-gray-100"
                uniqueKey="id"
                data={Notifications}
                render={(item) => (
                  <div
                    key={item.id}
                    className="group w-full flex items-center justify-between gap-4 hover:bg-brand-primary-50 duration-300 cursor-pointer"
                  >
                    <div className="flex gap-2 flex-grow p-3">
                      {/* Avatar vs Icon */}
                      {item.type === "conversation" ? (
                        <Avathar loading={false} imgUrl={item.avatar} />
                      ) : (
                        <div className="size-10 flex items-center justify-center rounded-full bg-gray-100">
                          <span className="text-lg">{item.icon}</span>
                        </div>
                      )}

                      {/* Content */}
                      <div className="space-y-1">
                        <p className="line-clamp-none text-sm text-gray-800">
                          {item.title}{" "}
                          {item.person && (
                            <span className="font-semibold">{item.person}</span>
                          )}
                        </p>

                        <p className="flex items-center gap-1 text-xs text-gray-500 break-words">
                          <IconMessageCircle2
                            size="14"
                            className="flex-shrink-0"
                          />
                          <p className="flex-grow line-clamp-1">
                            {" "}
                            {item.message}
                          </p>
                        </p>

                        {item.subMessage && (
                          <p className="text-[11px] text-gray-500">
                            {item.subMessage}
                          </p>
                        )}

                        <span className="mt-1 text-xs text-gray-600">
                          {item.time}
                        </span>
                      </div>
                    </div>
                  </div>
                )}
              />
            )}

            {/* Footer */}

            {!Notifications.length == 0 && (
              <div className="sticky bottom-0 p-4 flex items-center justify-center bg-white border-t border-gray-200">
                <Link
                  to="/notifications"
                  onClick={() => setIsNotificationMenuOpen(false)}
                  as="button"
                  className="text-sm text-brand-primary-500 hover:text-brand-primary-500"
                >
                  View All
                </Link>
              </div>
            )}
          </div>
        </Menu>
      )}
    </div>
  );
};

// ✅ Skeleton Loader
export const NotificationSkeleton = () => {
  return (
    <div className="flex gap-2 flex-grow p-3 animate-pulse border-b border-gray-200">
      {/* Avatar Placeholder */}
      <div className="h-10 w-10 rounded-full bg-gray-200" />

      {/* Content Placeholder */}
      <div className="flex flex-col gap-2 w-full">
        <div className="h-3 w-2/3 bg-gray-200 rounded" />
        <div className="h-2 w-4/5 bg-gray-200 rounded" />
        <div className="h-2 w-1/3 bg-gray-200 rounded" />
      </div>
    </div>
  );
};
