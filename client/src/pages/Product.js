import React from "react";
import { useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import DropdownComponent from "../components/General-Use/DropdownComponent.js";
import ProductPageImage from "../components/General-Use/ProductPageImage.js";
import { getProduct, updateProduct } from "../api/products.js";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import useToastMessages from "../components/Hooks/useToastMessages.js";

const Product = () => {
  let { id } = useParams();
  const queryClient = useQueryClient();

  const { cartStatusMessage, favoritesStatusMessage } = useToastMessages();

  const { data } = useQuery({
    queryKey: ["product", id],
    queryFn: () => getProduct(id),
  });

  const handleFavorite = useMutation({
    mutationFn: (id, favorite) => updateProduct(id, favorite),

    onSuccess: () =>
      Promise.all([
        queryClient.invalidateQueries({ queryKey: ["favorites"] }),
        queryClient.invalidateQueries({ queryKey: ["product", id] }),
      ]),
  });

  const addInCart = useMutation({
    mutationFn: (id, inCart) => updateProduct(id, inCart),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["cart"] });
    },
  });

  const product = data?.product;
  const favoriteProduct = product?.favorite;
  // const productInCart = data?.inCart;

  return (
    <section className="h-screen text-black flex flex-col overflow-x-hidden -mt-5 sm:mt-10 sm:mb-0  mb-5">
      {product && (
        <section className="w-full h-full my-auto flex flex-col sm:flex-row justify-center items-center gap-6 py-10">
          <ProductPageImage
            coverPhoto={product.images[0]}
            alternativesPhoto={product.images}
          />
          <section className="flex flex-col sm:w-1/3 w-full p-4  sm:p-0 justify-start align-center gap-3">
            <div className="flex flex-row sm:flex-col">
              <div className="flex flex-col w-2/3 sm:w-full gap-4">
                <p className="text-3xl">{product.name}</p>
                <p className="text-xl font-bold">{product.brand}</p>
              </div>

              <div className="flex justify-around items-center font-semibold sm:w-full w-1/3  sm:py-2">
                {product.onSale ? (
                  <>
                    <p className="text-red-500  text-xl">{product.price} RON</p>
                    <p className="line-through  text-xl ml-3">
                      {product.oldPrice} RON
                    </p>
                  </>
                ) : (
                  <p className="text-xl mr-3">{product.price} RON</p>
                )}
              </div>
            </div>
            <DropdownComponent options={product.sizes} />
            <section className="flex justify-around items-center gap-2 w-full">
              <button
                className="bg-black rounded-md text-white hover:bg-slate-600 py-2 px-4 w-3/4"
                onClick={() => [
                  addInCart.mutate({ id: product._id, inCart: true }),
                  cartStatusMessage(),
                ]}
              >
                Add to cart
              </button>
              <button
                className={`bg-black py-2  px-4 rounded-md   hover:text-red-300 w-1/4 ${
                  favoriteProduct === true ? "text-red-500" : "text-white"
                }`}
                onClick={() => [
                  favoritesStatusMessage(favoriteProduct),
                  handleFavorite.mutate({
                    id: product._id,
                    favorite: !favoriteProduct,
                  }),
                ]}
              >
                <FontAwesomeIcon icon={faHeart} />
              </button>
            </section>
          </section>
        </section>
      )}
      <ToastContainer />
    </section>
  );
};

export default Product;
