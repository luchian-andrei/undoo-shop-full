import axios from "axios";

const getProducts = async (gender) => {
  return axios
    .get("https://undoo-shop-back.onrender.com/sales/" + gender)
    .then((res) => res.data);
};

export { getProducts };
