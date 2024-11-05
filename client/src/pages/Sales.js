import React from "react";
import { useParams, Link } from "react-router-dom";
import { getProducts } from "../api/sales";
import { useQuery } from "@tanstack/react-query";
import GeneralCard from "../components/Cards/GeneralCard";
import ProductSkeleton from "../components/loaders/ProductSkeleton";

const Sales = () => {
  let { gender } = useParams();

  const { data, status } = useQuery({
    queryKey: ["sales", gender],
    queryFn: () => getProducts(gender),
  });

  const products = data?.products;

  return (
    <section className="flex min-h-screen justify-center items-center  overflow-x-hidden overflow-y-visible flex-col mt-12 py-14">
      <div className="flex flex-col gap-4 mx-auto my-10">
        <p className="lg:text-3xl text-xl text-center">
          Once they're gone they're gone forever
        </p>
      </div>

      <p className="my-10 ml-10 text-xl font-semibold underline text-black self-start">
        Sales / {gender}
      </p>
      <section className="p-4 grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-10 text-black mt-10 mb-20">
        {status === "success" ? (
          products?.map((product, index) => {
            return (
              <Link to={"/product/" + product._id} key={index}>
                <GeneralCard data={product} />
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

export default Sales;
