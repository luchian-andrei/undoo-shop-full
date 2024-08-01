import axios from "axios";

const getBrands = async (gender) => {
  return axios
    .get("http://localhost:5555/brands/" + gender)
    .then((res) => res.data);
};

const getBrand = async (brand, gender) => {
  return axios
    .get("http://localhost:5555/brand/" + brand + "/" + gender)
    .then((res) => res.data);
};

export { getBrands, getBrand };
