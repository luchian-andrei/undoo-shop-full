const CartProductSkeleton = () => {
  return (
    <div className="flex justify-around items-center bg-gray-100 w-full m-auto py-2 rounded-md animate-pulse">
      <span className="bg-gray-200 rounded-md w-20 h-20"></span>
      <span className="bg-gray-200 rounded-md w-1/4 py-3"></span>
      <span className="bg-gray-200 rounded-md w-1/6 py-3"></span>
      <span className="bg-gray-200 rounded-md w-8 py-3"></span>
    </div>
  );
};

export default CartProductSkeleton;
