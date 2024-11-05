import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

const NotificationCard = ({
  notification,
  setNotifications,
  notifications,
}) => {
  return (
    <div className="bg-gray-100 text-black p-4 rounded-sm shadow-lg flex justify-between items-center mb-2">
      <div>
        <p className="text-xl font-bold">{notification.text}</p>
        <p className="text-sm text-gray-400">
          {new Date(notification.date).toLocaleDateString()}
        </p>
      </div>
      <FontAwesomeIcon
        icon={faXmark}
        className="self-start cursor-pointer text-2xl"
        onClick={() =>
          setNotifications(
            notifications.filter((notif) => notif._id !== notification._id)
          )
        }
      />
    </div>
  );
};

export default NotificationCard;
