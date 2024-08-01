import React from "react";
import { useState } from "react";

const ProductPageImage = ({ coverPhoto, alternativesPhoto }) => {
  const [selectedPhoto, setSelectedPhoto] = useState(coverPhoto);

  return (
    <div className="flex flex-col justify-center items-center sm:gap-4 gap-1 w-1/2">
      <img
        src={selectedPhoto}
        alt={coverPhoto}
        className="object-contain w-96 h-96"
      />
      <div className="flex flex-row justify-center items-center w-12 h-12 gap-4 p-2 object-cover">
        {alternativesPhoto.map((image) => (
          <img
            src={image}
            alt={image}
            onClick={() => setSelectedPhoto(image)}
            className={` ${
              selectedPhoto === image ? "opacity-100" : "opacity-50"
            } cursor-pointer `}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductPageImage;
