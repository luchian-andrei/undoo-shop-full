import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot, faClock } from "@fortawesome/free-solid-svg-icons";

const StoresCard = ({ name, location, program, handleClick }) => {
  return (
    <section
      className="flex flex-col justify-center items-center h-full hover:bg-black hover:text-white  rounded-md  mx-4 my-4 gap-3 transition-colors duration-500 cursor-pointer p-4"
      onClick={() => handleClick()}
    >
      <p className="font-bold text-xl">{name} </p>
      <p>
        <FontAwesomeIcon icon={faLocationDot} style={{ color: "red" }} />{" "}
        {location}
      </p>
      <p>
        <FontAwesomeIcon icon={faClock} style={{ color: "red" }} /> {program}{" "}
      </p>
    </section>
  );
};

export default StoresCard;
