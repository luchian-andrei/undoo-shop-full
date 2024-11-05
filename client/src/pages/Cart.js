import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { getCart } from "../api/cart";
import CartCard from "../components/Cards/CartCard";
import { useQuery } from "@tanstack/react-query";

import CartProductSkeleton from "../components/loaders/CartProductSkeleton";
import CartTotalSkeleton from "../components/loaders/CartTotalSkeleton";

const skeletons = [1, 2, 3, 4];

const Cart = () => {
  const [total, setTotal] = useState(0);
  const navigate = useNavigate();

  const { data, status } = useQuery({
    queryKey: ["cart-products"],
    queryFn: () => getCart(),
  });

  const products = data?.products;
  const prices = data?.prices;

  useEffect(() => {
    let sum = 0;
    prices?.map((price) => (sum += price));

    setTotal(sum);
  }, [prices]);

  return (
    <section className="min-h-screen flex flex-col overflow-x-hidden mt-12 py-14">
      <div className="flex flex-col gap-4 mx-auto mt-16 mb-5">
        <p className="text-3xl ">Shopping Cart</p>
      </div>

      <section className="sm:w-3/4 w-full grid grid-cols-1 gap-4 m-auto p-4">
        {status === "pending" ? (
          skeletons.map((skeleton, index) => (
            <CartProductSkeleton key={index} />
          ))
        ) : products?.length > 0 ? (
          products.map((product, index) => {
            return <CartCard data={product} key={index} />;
          })
        ) : (
          <p className="text-center">No products in cart</p>
        )}
      </section>

      {status === "pending" ? (
        <CartTotalSkeleton />
      ) : products?.length > 0 ? (
        <div className="flex m-auto justify-around items-center w-3/4 bg-stone-100 font-semibold py-2">
          <p>Your total is</p>
          <p>{total} Lei</p>
        </div>
      ) : null}
      <div className="flex m-auto justify-between items-center gap-4 my-10">
        <Link to="/">
          <button className="p-4 rounded-md bg-black text-white hover:opacity-80">
            Continue shopping
          </button>
        </Link>
        <button
          className="p-4 rounded-md bg-black text-white hover:opacity-80"
          onClick={() => navigate("/coming-soon")}
        >
          Place order
        </button>
      </div>
    </section>
  );
};

export default Cart;
