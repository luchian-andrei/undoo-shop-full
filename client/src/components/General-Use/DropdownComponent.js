import React from "react";
import { useState } from "react";

const DropdownComponent = ({ options }) => {
  const [selected, setSelected] = useState();
  const [showSizes, setShowSizes] = useState(false);

  return (
    <div className="relative">
      <button
        className="bg-white hover:bg-gray-200 text-black w-full py-2 my-4 rounded border-2 border-gray-300 "
        onClick={() => setShowSizes(!showSizes)}
      >
        {!selected ? "Select a size" : selected}
      </button>
      <ul
        className={`absolute ${
          showSizes ? "false" : "hidden"
        } flex-col text-black rounded-md border-2 border-gray-300 bg-white -my-3 max-h-[200%] sm:max-h-[300%] overflow-y-auto w-full z-auto`}
      >
        {options.map((option, index) => (
          <li
            key={index}
            className={`hover:bg-gray-300 border-b-2 text-center  py-2 ${
              selected === option ? "bg-gray-200" : "bg-white"
            }`}
            onClick={() => setSelected(option)}
          >
            {option}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DropdownComponent;
