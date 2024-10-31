import axios from "axios";

const getNotifications = async () => {
  return axios
    .get("https://undoo-shop-back.onrender.com/notifications")
    .then((res) => res.data);
};

const updateNotifications = async ({ id, read }) => {
  return axios
    .put(`https://undoo-shop-back.onrender.com/notifications/${id}`, { read })
    .then((res) => res.data)
    .catch((err) => console.log(err));
};

export { getNotifications, updateNotifications };
