import React from "react";
import { useParams, Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getProducts } from "../api/products";
import GeneralCard from "../components/Cards/GeneralCard";

const Clothing = () => {
  let { gender } = useParams();

  const { data } = useQuery({
    queryKey: ["clothing", gender],
    queryFn: () => getProducts("clothing", gender),
  });

  const products = data?.products;

  return (
    <section className="flex justify-center items-center  overflow-x-hidden overflow-y-visible flex-col mt-20">
      <p className="my-10 ml-10 text-xl font-semibold underline text-black self-start">
        Clothing / {gender}
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

export default Clothing;
