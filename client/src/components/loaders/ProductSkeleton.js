const ProductSkeleton = () => {
  return (
    <div className="flex flex-col w-72 h-96 lg:shadow-md rounded-md justify-start text-start items-center px-4 py-2 bg-white animate-pulse">
      <span className="bg-gray-200 w-3/4 h-56 rounded-lg"></span>
      <p className="flex flex-col justify-center items-start w-full">
        <span className="bg-gray-200 w-full h-8 rounded-lg mt-4 mb-2"></span>
        <span className="bg-gray-200 w-1/3 h-8 rounded-lg"></span>
      </p>
      <span className="bg-gray-200 w-2/5 h-8 rounded-lg self-end mt-2"></span>
    </div>
  );
};

export default ProductSkeleton;
