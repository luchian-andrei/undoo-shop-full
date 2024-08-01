import React from "react";
import { useState } from "react";

const SalesPageCard = ({ data }) => {
  const [coverPhoto, setCoverPhoto] = useState(0);

  return (
    <section
      className="flex flex-col w-72 h-96 bg-white rounded-md justify-start text-start items-center px-4 py-2 tracking-widest hover:opacity-75 hover:shadow-2xl transition-all duration-300"
      onMouseOver={() => setCoverPhoto(1)}
      onMouseLeave={() => setCoverPhoto(0)}
    >
      <img
        src={data.images[coverPhoto]}
        alt={data.name}
        className="object-contain w-full h-56 rounded-md mb-2"
      />
      <p className="self-start text-2xl  mt-2">{data.name} </p>
      <p className="self-start text-sm  text-gray-500">{data.brand}</p>
      {/* <p className="self-start flex justify-center items-center gap-3">
        {data.sizes.map((size) => {
          return (
            <p className="hover:text-red-200 cursor-pointer font-bold">
              {size}
            </p>
          );
        })}
      </p> */}
      <section className="flex w-full justify-start gap-3">
        <p className="text-lg text-red-500 ">{data.price} Lei </p>
        <p className="text-lg  line-through ">{data.oldPrice} Lei</p>
      </section>
    </section>
  );
};

export default SalesPageCard;
