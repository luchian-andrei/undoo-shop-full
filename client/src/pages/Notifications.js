import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
// import { getNotifications, updateNotifications } from "../api/notifications";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

const Notifications = ({ closeNotifications }) => {
  const queryClient = useQueryClient();
  const [notifications, setNotifications] = useState([]);

  // const mutation = useMutation({
  //   mutationFn: (id, read) => updateNotifications(id, read),
  //   onSuccess: () => {
  //     queryClient.invalidateQueries({ queryKey: ["notifications"] });
  //   },
  // });

  const { data } = useQuery({
    queryKey: ["notifications"],
    queryFn: () => setNotifications(data.notifications),
  });

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
          {notifications?.length > 0 ? (
            notifications.map((notification, index) => {
              return (
                <div
                  key={index}
                  className="bg-gray-100 text-black p-4 rounded-sm shadow-lg flex justify-between items-center mb-2"
                >
                  <div>
                    <p className="text-xl font-bold">{notification.text}</p>
                    <p className="text-sm text-gray-400">
                      {new Date(notification.date).toLocaleDateString()}
                    </p>
                  </div>
                  <FontAwesomeIcon
                    icon={faXmark}
                    key={index}
                    className="self-start cursor-pointer text-2xl"
                    onClick={() =>
                      setNotifications(
                        notifications.filter(
                          (notif) => notif._id !== notification._id
                        )
                      )
                    }
                  />
                </div>
              );
            })
          ) : (
            <p className="text-black text-center text-2xl">No notifications </p>
          )}
        </section>
      </section>
    </div>
  );
};

export default Notifications;
