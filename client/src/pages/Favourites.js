import React from "react";
import { Link } from "react-router-dom";
import { getFavorites } from "../api/favorites";
import { useQuery } from "@tanstack/react-query";
import GeneralCard from "../components/Cards/GeneralCard";

const Favourites = () => {
  const { data } = useQuery({
    queryKey: ["favorites"],
    queryFn: getFavorites,
  });

  const products = data?.favorites;

  return (
    <section className="flex justify-center items-center min-h-screen overflow-x-hidden overflow-y-visible flex-col mt-10">
      <p className="mt-20 text-3xl text-center">
        We're sure these will look beter in the cart
      </p>

      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 p-4 mt-10 mb-20 ">
        {products?.length > 0
          ? products.map((product, index) => {
              return (
                <Link to={"/product/" + product._id} key={index}>
                  <GeneralCard data={product} key={index} />
                </Link>
              );
            })
          : null}
      </section>
      <p className="text-center flex justify-center items-center">
        No favorites products
      </p>
    </section>
  );
};

export default Favourites;
