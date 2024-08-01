import React from "react";
import { Link, useParams } from "react-router-dom";
import { getProducts } from "../api/products";
import { useQuery } from "@tanstack/react-query";
import GeneralCard from "../components/Cards/GeneralCard";

const Shoes = () => {
  let { gender } = useParams();
  const { data } = useQuery({
    queryKey: ["shoes", gender],
    queryFn: () => getProducts("shoes", gender),
  });

  console.log(data);

  const products = data?.products;

  return (
    <section className="flex justify-center items-center  overflow-x-hidden overflow-y-visible flex-col mt-20">
      <p className="my-10 ml-10 text-xl font-semibold underline text-black self-start">
        Shoes / {gender}
      </p>
      <section className="p-4 grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-y-32 gap-x-10 lg:gap-10 text-black mt-10 mb-20">
        {products?.length > 0 ? (
          products.map((product, index) => {
            return (
              <Link to={"/product/" + product._id} key={index}>
                <GeneralCard data={product} />
              </Link>
            );
          })
        ) : (
          <p>No products here</p>
        )}
      </section>
    </section>
  );
};

export default Shoes;
