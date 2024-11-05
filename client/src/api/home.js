import axios from "axios";

const getTrendingProducts = async (gender) => {
  return axios
    .get("https://undoo-shop-back.onrender.com/trending/" + gender)
    .then((res) => res.data);
};

const getNewProducts = async (gender) => {
  return axios
    .get("https://undoo-shop-back.onrender.com/new-arrivals/" + gender)
    .then((res) => res.data);
};

const getSalesProducts = async (gender) => {
  return axios
    .get("https://undoo-shop-back.onrender.com/sales/" + gender)
    .then((res) => res.data);
};

export { getTrendingProducts, getNewProducts, getSalesProducts };
