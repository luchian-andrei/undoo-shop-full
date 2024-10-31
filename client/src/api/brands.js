import axios from "axios";

const getBrands = async (gender) => {
  return axios
    .get("https://undoo-shop-back.onrender.com/brands/" + gender)
    .then((res) => res.data);
};

const getBrand = async (brand, gender) => {
  return axios
    .get("https://undoo-shop-back.onrender.com/brand/" + brand + "/" + gender)
    .then((res) => res.data);
};

export { getBrands, getBrand };
