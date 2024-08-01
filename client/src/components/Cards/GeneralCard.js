/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
// import useDeviceTypeFinder from "./Hooks/useDeviceTypeFinder";
import useDeviceTypeFinder from "../Hooks/useDeviceTypeFinder";

const GeneralCard = ({ data }) => {
  const [showSizes, setShowSizes] = useState(false);
  const [coverPhoto, setCoverPhoto] = useState(0);
  const [className, setClassName] = useState("");

  const { device } = useDeviceTypeFinder();

  const { ref, inView } = useInView({ threshold: 0 });

  const specialClasses = () => {
    if (device !== "desktop" && inView === true) {
      setClassName(
        "opacity-100 shadow-2xl transition-all delay-500 duration-300"
      );
    } else if (device !== "desktop" && inView !== true) {
      setClassName("opacity-30 shadow-none");
    } else if (device === "desktop") {
      setClassName(
        "hover:opacity-75 hover:shadow-2xl transition-all duration-300"
      );
    }
  };

  useEffect(() => {
    specialClasses();
  }, [device, inView]);

  return (
    <section
      ref={ref}
      className={` ${className} flex flex-col w-72 h-96 lg:shadow-md rounded-md justify-start text-start items-center px-4 py-2 tracking-widest text-ellipsis bg-white`}
      onMouseOver={() => [setShowSizes(true), setCoverPhoto(1)]}
      onMouseLeave={() => [setShowSizes(false), setCoverPhoto(0)]}
    >
      <img
        src={data.images[coverPhoto]}
        alt={data.name}
        className="object-contain w-full h-56 rounded-md mb-2"
      />
      <p className="self-start text-2xl  mt-2 text-ellipsis">{data.name} </p>
      <p className="self-start text-lg  text-gray-500">{data.brand}</p>
      <p
        className={` flex justify-start text-gray-500 ${
          showSizes ? "opacity-100" : "opacity-0"
        } items-center gap-3 transition-all duration-500 truncate  w-full`}
      >
        <span>Sizes:</span>
        {data.sizes.map((size, index) => {
          return <span key={index}>{size}</span>;
        })}
        {}
      </p>
      {data.onSale === true ? (
        <p className="flex justify-around  items-center w-full py-2">
          <span className="text-2xl text-red-500">{data.price} Lei</span>
          <span className="text-xl line-through">{data.oldPrice} Lei</span>
        </p>
      ) : (
        <p className="text-2xl mr-3 self-end">{data.price} Lei </p>
      )}
    </section>
  );
};

export default GeneralCard;
