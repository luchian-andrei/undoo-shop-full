import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { updateProduct } from "../../api/products";
import { useMutation, useQueryClient } from "@tanstack/react-query";

const CartCard = ({ data }) => {
  const queryClient = useQueryClient();

  const deleteFromCart = useMutation({
    mutationFn: (id, inCart) => updateProduct(id, inCart),

    onSuccess: () =>
      Promise.all([
        queryClient.invalidateQueries({ queryKey: ["cart-products"] }),
        queryClient.invalidateQueries({ queryKey: ["cart"] }),
      ]),
  });

  return (
    <section className="flex justify-around items-center bg-gray-100 hover:bg-slate-100 w-full m-auto py-2 rounded-md">
      <Link to={"/product/" + data._id} className="w-1/4">
        <img
          src={data.images[0]}
          alt={data.name}
          className="w-20 h-20 object-contain hover:opacity-80"
        />
      </Link>
      <Link to={"/product/" + data._id} className="w-1/4">
        <p className="hover:underline">{data.name}</p>
      </Link>
      <div className="w-1/4 flex flex-col justify-center items-center">
        <p className={`${data.onSale ? "text-red-500" : "text-black"}`}>
          {data.price} Lei
        </p>
        {data.onSale ? (
          <p className="line-through">{data.oldPrice} Lei </p>
        ) : null}
      </div>
      <div className="flex flex-col w-1/4">
        <FontAwesomeIcon
          icon={faTrashCan}
          className="hover:text-red-500 text-xl cursor-pointer"
          onClick={() => deleteFromCart.mutate({ id: data._id, inCart: false })}
        />
      </div>
    </section>
  );
};

export default CartCard;
