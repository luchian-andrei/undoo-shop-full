import { Link, useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getProducts } from "../api/new-arrivals";
import GeneralCard from "../components/Cards/GeneralCard";
import ProductSkeleton from "../components/loaders/ProductSkeleton";
import { useEffect, useState } from "react";

const NewArrivals = () => {
  let { gender } = useParams();

  const { data } = useQuery({
    queryKey: ["new arrivals", gender],
    queryFn: () => getProducts(gender),
  });

  const products = data?.products;
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (products === undefined) {
      setLoading(true);
    } else {
      setLoading(false);
    }
  }, [products]);

  return (
    <section className="flex justify-center items-center  overflow-x-hidden overflow-y-visible flex-col mt-20">
      <div className="flex flex-col gap-4  my-10 justify-center items-center">
        <p className="text-3xl text-center">
          Here you will find all the new products
        </p>
      </div>
      <p className="my-10 ml-10 text-xl font-semibold underline text-black self-start">
        New Arrivals / {gender}{" "}
      </p>
      <section className="p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-y-32 gap-x-10 lg:gap-10 text-black mt-10 mb-20">
        {!loading ? (
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

export default NewArrivals;
