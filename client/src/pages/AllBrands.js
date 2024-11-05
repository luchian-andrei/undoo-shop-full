import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getBrands } from "../api/brands";
import { useQuery } from "@tanstack/react-query";
import AllBrandsSkeleton from "../components/loaders/AllBrandsSkeleton";

const Brands = () => {
  const { gender } = useParams();

  const { data } = useQuery({
    queryKey: ["brands", gender],
    queryFn: () => getBrands(gender),
  });

  const brands = data?.brands;
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (brands === undefined) {
      setLoading(true);
    } else {
      setLoading(false);
    }
  }, [brands]);

  return (
    <section className="h-fit flex overflow-x-hidden flex-col mt-12 py-14">
      <p className="my-10 ml-10 text-xl font-semibold underline text-black">
        Brands for {gender}
      </p>
      {!loading ? (
        <section className="py-4 grid md:grid-cols-2 md:grid-rows-2  grid-cols-1 grid-rows-1  mx-auto sm:gap-12 gap-8 w-3/4 self-center  text-center">
          {brands.map((brand, index) => (
            <Link key={index} to={"/" + brand + "/" + gender}>
              <div className="lg:shadow-md rounded-md justify-center text-center items-center px-4 py-2 w-1/2 mx-auto hover:bg-gray-100">
                <p className="text-xl">{brand}</p>
              </div>
            </Link>
          ))}
        </section>
      ) : (
        <AllBrandsSkeleton />
      )}
    </section>
  );
};

export default Brands;
