import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { useQuery } from "@tanstack/react-query";
import NotificationCard from "../components/Cards/NotificationCard";
import NotificationsSkeleton from "../components/loaders/NotificationsSkeleton";
import { getNotifications } from "../api/notifications";

const skeletons = [1, 2, 3, 4];

const Notifications = ({ closeNotifications }) => {
  const [notifications, setNotifications] = useState([]);

  const { data, status } = useQuery({
    queryKey: ["notifications"],
    queryFn: () => getNotifications(),
  });

  useEffect(() => {
    if (status === "success") {
      setNotifications(data.notifications);
    } else {
      setNotifications([]);
    }
  }, [status]);

  // when you want to delete a notification you only delete
  // it from the state, not from database

  return (
    <div className="fixed inset-0 z-50  overflow-y-auto flex justify-center sm:top-10 ">
      <div
        className="fixed inset-0 bg-gray-700 bg-opacity-50"
        onClick={closeNotifications}
      ></div>
      <section
        id="notifications"
        className="fixed z-50 sm:w-1/2 w-full flex flex-col sm:min-h-4/5 min-h-[350px] bg-white rounded-md p-6"
      >
        <FontAwesomeIcon
          icon={faXmark}
          onClick={closeNotifications}
          className="self-end cursor-pointer text-3xl mb-6 text-black"
        />

        <section className="relative overflow-y-scroll no-scrollbar grid grid-cols-1 gap-3">
          {status === "success" ? (
            notifications.length > 0 ? (
              notifications.map((notification, index) => {
                return (
                  <NotificationCard
                    key={index}
                    setNotifications={setNotifications}
                    notification={notification}
                    notifications={notifications}
                  />
                );
              })
            ) : (
              <p className="text-black text-center text-2xl">
                No notifications
              </p>
            )
          ) : (
            skeletons.map((skeleton, index) => (
              <NotificationsSkeleton key={index} />
            ))
          )}
        </section>
      </section>
    </div>
  );
};

export default Notifications;
