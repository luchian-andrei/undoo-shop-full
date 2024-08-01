import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faXmark } from "@fortawesome/free-solid-svg-icons";

const SearchBar = ({ closeSearchBar }) => {
  return (
    <section className="fixed inset-0 z-50  overflow-y-auto flex justify-center sm:top-10">
      <div
        className="fixed inset-0 bg-gray-900 bg-opacity-50"
        onClick={closeSearchBar}
      ></div>
      <div className="sm:w-3/4 w-full relative sm:h-1/2 h-2/3 flex flex-col rounded-b-md sm:rounded-md bg-white p-4">
        <div className="flex justify-center items-center p-4 border-b-2 border-gray-400">
          <input
            type="text"
            className="w-3/4 p-2 border-b-[1px] border-gray-400 focus:outline-none"
            placeholder="What are you looking for ?"
          />
          <FontAwesomeIcon
            icon={faXmark}
            className="rounded-sm p-3 border-r-[1px] border-gray-400 text-2xl cursor-pointer"
            onClick={closeSearchBar}
          />
          <FontAwesomeIcon
            icon={faMagnifyingGlass}
            className="rounded-sm p-3 text-2xl cursor-pointer"
          />
        </div>
        <p className="text-center mt-10 text-2xl">
          Feature available with the next update
        </p>
      </div>
    </section>
  );
};

export default SearchBar;
