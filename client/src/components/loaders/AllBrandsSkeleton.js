const skeletons = [1, 2, 3, 4, 5, 6, 7, 8];

const AllBrandsSkeleton = () => {
  return (
    <section className="py-4 grid md:grid-cols-2 md:grid-rows-2  grid-cols-1 grid-rows-1  mx-auto sm:gap-12 gap-8 w-3/4 self-center  text-center justify-center items-center">
      {skeletons.map((skeleton, index) => (
        <div
          className="lg:shadow-md rounded-md justify-center items-center px-4 py-4 w-1/2 mx-auto text-center"
          key={index}
        >
          <p className="text-xl bg-gray-200 w-3/4 py-2 rounded-lg mx-auto"></p>
        </div>
      ))}
    </section>
  );
};

export default AllBrandsSkeleton;
