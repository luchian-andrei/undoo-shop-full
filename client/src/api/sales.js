import axios from "axios";

const getProducts = async (gender) => {
  return axios
    .get("http://localhost:5555/sales/" + gender)
    .then((res) => res.data);
};

export { getProducts };
