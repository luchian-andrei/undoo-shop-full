import axios from "axios";

const getProducts = async (category, gender) => {
  return axios
    .get(
      "https://undoo-shop-back.onrender.com/products/" + category + "/" + gender
    )
    .then((res) => res.data);
};

const getProduct = async (id) => {
  return axios
    .get("https://undoo-shop-back.onrender.com/product/" + id)
    .then((res) => res.data);
};

const updateProduct = async ({ id, favorite, inCart }) => {
  return axios
    .put(`https://undoo-shop-back.onrender.com/products/${id}`, {
      favorite,
      inCart,
    })
    .then((res) => res.data)
    .catch((error) => console.log(error));
};

export { getProducts, getProduct, updateProduct };
