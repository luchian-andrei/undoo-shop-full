import axios from "axios";

const getCart = async () => {
  return axios.get("http://localhost:5555/cart").then((res) => res.data);
};

export { getCart };
