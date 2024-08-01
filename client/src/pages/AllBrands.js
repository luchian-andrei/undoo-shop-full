import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getBrands } from "../api/brands";
import { useQuery } from "@tanstack/react-query";

const Brands = () => {
  const { gender } = useParams();

  const { data } = useQuery({
    queryKey: ["brands", gender],
    queryFn: () => getBrands(gender),
  });

  const brands = data?.brands;

  return (
    <section className="h-screen flex overflow-x-hidden flex-col mt-12 py-14">
      <p className="my-10 ml-10 text-xl font-semibold underline text-black">
        Brands for {gender}
      </p>
      <section className="py-4 grid lg:grid-cols-3 lg:grid-rows-3 md:grid-cols-2 md:grid-rows-2  grid-cols-1 grid-rows-1  mx-auto sm:gap-6 gap-8 w-3/4 self-center  text-center">
        {brands?.length > 0 ? (
          brands.map((brand, index) => {
            return (
              <Link key={index} to={"/" + brand + "/" + gender}>
                <p className="hover:underline text-xl">{brand}</p>
              </Link>
            );
          })
        ) : (
          <p>No brands here</p>
        )}
      </section>
    </section>
  );
};

export default Brands;
