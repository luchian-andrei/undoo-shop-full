import axios from "axios";

const getFavorites = async () => {
  return axios.get("http://localhost:5555/favorites").then((res) => res.data);
};

export { getFavorites };
