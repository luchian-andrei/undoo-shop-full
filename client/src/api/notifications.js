import axios from "axios";

const getNotifications = async () => {
  return axios
    .get("http://localhost:5555/notifications")
    .then((res) => res.data);
};

const updateNotifications = async ({ id, read }) => {
  return axios
    .put(`http://localhost:5555/notifications/${id}`, { read })
    .then((res) => res.data)
    .catch((err) => console.log(err));
};

export { getNotifications, updateNotifications };
