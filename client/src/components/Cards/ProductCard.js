import React from "react";

const NewArrivalsCard = ({
  id,
  gender,
  name,
  brand,
  sizes,
  images,
  price,
  oldPrice,
  favorite,
  isNew,
  onSale,
  inCart,
}) => {
  return (
    <section className="flex flex-col w-72 h-96 bg-white rounded-md justify-start text-start items-center px-4 py-2 tracking-widest hover:bg-stone-100 transition-colors duration-300">
      <img
        src={images[0]}
        alt={name}
        className="object-contain w-full h-56 rounded-md mb-2"
      />
      <p className="self-start text-2xl mt-2">{name} </p>
      <p className="self-start text-lg font-semibold text-gray-500">{brand}</p>
      <p className="self-start flex justify-center items-center gap-3">
        {sizes.map((size, index) => {
          return (
            <p
              className="hover:text-red-200 cursor-pointer font-bold"
              key={index}
            >
              {size}
            </p>
          );
        })}
      </p>
      <section id="item-price" className="flex w-full justify-start">
        <p className="text-xl font-semibold mr-3 text-red-500">{price} Lei </p>
        <p className="text-xl font-semibold mr-3 line-through">
          {onSale ? oldPrice : null} Lei
        </p>
      </section>
    </section>
  );
};

export default NewArrivalsCard;
