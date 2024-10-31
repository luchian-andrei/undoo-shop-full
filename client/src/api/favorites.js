import axios from "axios";

const getFavorites = async () => {
  return axios
    .get("https://undoo-shop-back.onrender.com/favorites")
    .then((res) => res.data);
};

export { getFavorites };
