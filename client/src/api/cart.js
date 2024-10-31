import axios from "axios";

const getCart = async () => {
  return axios
    .get("https://undoo-shop-back.onrender.com/cart")
    .then((res) => res.data);
};

export { getCart };
