import React from "react";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHourglassHalf } from "@fortawesome/free-regular-svg-icons";

const SalesCard = ({ data }) => {
  const [showAlert, setShowAlert] = useState(false);

  return (
    <section
      id="trending-card"
      className="flex flex-col w-72 min-h-96 bg-white rounded-md justify-start text-start items-center px-4 py-2 gap-2 tracking-widest "
      onMouseOver={() => setShowAlert(true)}
      onMouseLeave={() => setShowAlert(false)}
    >
      <img
        src={data.images[0]}
        alt={data.name}
        className="object-contain w-full h-56 rounded-md mb-2"
      />
      <p className="self-start text-2xl  mt-2">{data.name}</p>
      <p className="self-start text-sm  text-gray-400">{data.brand}</p>
      <section id="item-price" className="flex w-full justify-start">
        <p className="text-xl  mr-3 text-red-500">{data.price} Lei </p>
        <p className="line-through  text-xl  ml-3">{data.oldPrice} Lei</p>
      </section>
      <div
        className={`self-start flex ${
          showAlert ? "opacity-100" : "opacity-0"
        } transition-opacity duration-500  gap-3`}
      >
        <p className="font-semibold italic text-red-500">
          The offer ends soon{" "}
          <FontAwesomeIcon icon={faHourglassHalf} className="text-xl" />
        </p>
      </div>
    </section>
  );
};

export default SalesCard;
