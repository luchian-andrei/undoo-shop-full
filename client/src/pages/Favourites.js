import React from "react";
import { Link } from "react-router-dom";
import { getFavorites } from "../api/favorites";
import { useQuery } from "@tanstack/react-query";
import GeneralCard from "../components/Cards/GeneralCard";
import ProductSkeleton from "../components/loaders/ProductSkeleton";

const skeletons = [1, 2, 3, 4];

const Favourites = () => {
  const { data, status } = useQuery({
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
        {status === "success"
          ? products?.map((product, index) => {
              return (
                <Link to={"/product/" + product._id} key={index}>
                  <GeneralCard data={product} key={index} />
                </Link>
              );
            })
          : skeletons.map((skeleton, index) => <ProductSkeleton key={index} />)}
      </section>
    </section>
  );
};

export default Favourites;
