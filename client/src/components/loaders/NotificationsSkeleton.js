const NotificationsSkeleton = () => {
  return (
    <div className="w-full animate-pulse flex flex-col gap-4 self-center px-10">
      <span className="w-2/3 bg-gray-200 py-4 rounded-md"></span>
      <span className="w-1/3 bg-gray-200 py-4 rounded-md"></span>
    </div>
  );
};

export default NotificationsSkeleton;
