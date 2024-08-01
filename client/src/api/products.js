import axios from "axios";

const getProducts = async (category, gender) => {
  return axios
    .get("http://localhost:5555/products/" + category + "/" + gender)
    .then((res) => res.data);
};

const getProduct = async (id) => {
  return axios
    .get("http://localhost:5555/product/" + id)
    .then((res) => res.data);
};

const updateProduct = async ({ id, favorite, inCart }) => {
  return axios
    .put(`http://localhost:5555/products/${id}`, { favorite, inCart })
    .then((res) => res.data)
    .catch((error) => console.log(error));
};

export { getProducts, getProduct, updateProduct };
