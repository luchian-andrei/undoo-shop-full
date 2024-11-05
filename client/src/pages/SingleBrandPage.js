import React from "react";
import { Link, useParams } from "react-router-dom";
import GeneralCard from "../components/Cards/GeneralCard";
import { getBrand } from "../api/brands";

import ProductSkeleton from "../components/loaders/ProductSkeleton";

import { useQuery } from "@tanstack/react-query";

const BrandPage = () => {
  const { brand, gender } = useParams();

  const { data, status } = useQuery({
    queryKey: [`${brand} products`],
    queryFn: () => getBrand(brand, gender),
  });

  const products = data?.products;

  return (
    <section className="flex justify-center items-center  overflow-x-hidden overflow-y-visible flex-col mt-20">
      <p className="my-10 sm:ml-20 ml-10 text-xl font-semibold underline text-black self-start">
        {`"${brand}"`} for {gender}
      </p>
      <section className="p-4 grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-y-32 gap-x-10 lg:gap-10 text-black mt-10 mb-20">
        {status === "success" ? (
          products?.map((product, index) => {
            return (
              <Link to={"/product/" + product._id} key={index}>
                <GeneralCard data={product} key={index} />
              </Link>
            );
          })
        ) : (
          <>
            <ProductSkeleton />
            <ProductSkeleton />
            <ProductSkeleton />
            <ProductSkeleton />
          </>
        )}
      </section>
    </section>
  );
};

export default BrandPage;
