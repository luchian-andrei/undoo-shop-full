import React, { useState } from "react";

const TrendingCard = ({ data }) => {
  const [showSizes, setShowSizes] = useState(false);

  return (
    <section
      id="trending-card"
      className="flex flex-col w-72 h-96 bg-white rounded-md justify-start text-start items-center px-4  tracking-widest cursor-pointer gap-4"
      onMouseOver={() => setShowSizes(true)}
      onMouseLeave={() => setShowSizes(false)}
    >
      <img
        src={data.images[0]}
        alt={data.name}
        className="object-contain w-full h-56 rounded-md mb-2"
      />
      <p className="self-start text-2xl mt-2">{data.name}</p>
      <p className="self-start text-sm text-gray-500">{data.brand}</p>
      <section id="item-price" className="flex w-full justify-start">
        <p className="text-lg font-semibold mr-3 text-gray-500">
          {data.price} Lei
        </p>
      </section>
    </section>
  );
};

export default TrendingCard;
