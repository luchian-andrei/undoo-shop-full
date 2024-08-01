import React, { useState } from "react";

const NewCard = ({ data }) => {
  const [showSizes, setShowSizes] = useState(false);

  return (
    <section
      id="trending-card"
      className="flex flex-col w-72 h-96 bg-white rounded-md justify-start text-start items-center px-4 py-2 tracking-widest cursor-pointer"
      onMouseOver={() => setShowSizes(true)}
      onMouseLeave={() => setShowSizes(false)}
    >
      <img
        src={data.images[0]}
        alt={data.name}
        className="object-contain w-full h-56 rounded-md mb-2"
      />
      <p className="self-start text-2xl font-semibold mt-2">{data.name}</p>
      <p className="self-start text-sm font-semibold text-gray-400">
        {data.brand}
      </p>
      <section id="item-price" className="flex w-full justify-start py-2">
        <p className="text-xl font-semibold mr-3">{data.price} Lei </p>
      </section>
      <div
        className={`self-start flex ${
          showSizes ? "opacity-100" : "opacity-0"
        } transition-opacity duration-500  gap-3`}
      >
        Available in:
        {data.sizes.map((size) => {
          return <p className=" font-semibold ">{size}</p>;
        })}
      </div>
    </section>
  );
};

export default NewCard;
