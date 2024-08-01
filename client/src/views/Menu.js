import React from "react";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const menuLinks = [
  { name: "New Arrivals", goTo: "new-arrivals" },
  { name: "Clothing", goTo: "clothing" },
  { name: "Shoes", goTo: "shoes" },
  { name: "Accesories", goTo: "accesories" },
  { name: "Brands", goTo: "brands" },
  { name: "Sales", goTo: "sales" },
];

const genders = ["Men", "Women", "Children"];

const Menu = ({ closeMenu, showMenu }) => {
  const navigate = useNavigate();
  const [gender, setGender] = useState("Men");

  return (
    <section
      className={`h-screen flex gap-2 no-scrollbar flex-col fixed top-0 z-20 inset-0 overflow-y-scroll ${
        showMenu ? "left-0" : "-translate-x-full"
      } w-full lg:w-1/3 sm:w-1/2 bg-white text-black  transition-all duration-1000 text-xl`}
    >
      <section className="sticky top-0 z-10 gap-6 flex flex-col bg-white px-4 pt-4">
        <FontAwesomeIcon
          icon={faXmark}
          onClick={closeMenu}
          className="self-end cursor-pointer text-3xl text-black mr-6 mt-4"
        />
        <section className="flex justify-center items-center font-semibold text-black ">
          {genders.map((gender, index) => (
            <button
              className="w-2/5 "
              onClick={() => setGender(gender)}
              key={index}
            >
              {gender}
            </button>
          ))}
        </section>
        <p
          className={
            gender === "Men"
              ? "w-1/3 bg-black h-1 transition-transform duration-500"
              : gender === "Women"
              ? "w-1/3 bg-black h-1 translate-x-full transition-transform duration-500"
              : gender === "Children"
              ? "w-1/3 bg-black h-1 translate-x-[200%] transition-transform duration-500"
              : null
          }
        ></p>
      </section>
      <section className="p-4">
        <ul className="flex flex-col gap-4 my-4">
          {menuLinks.map((link, index) => (
            <Link
              onClick={(e) => [
                e.preventDefault(),
                closeMenu(),
                navigate(`/${link.goTo}/${gender}`),
              ]}
              key={index}
            >
              <li className="bg-white hover:opacity-70 hover:-translate-y-2 transition-all duration-500 p-4 flex justify-between items-center cursor-pointer rounded-[20px_5px_5px_20px]">
                {link.name} <FontAwesomeIcon icon={faAngleRight} />{" "}
              </li>
            </Link>
          ))}
          <Link
            onClick={(e) => [
              e.preventDefault(),
              closeMenu(),
              navigate("/stores"),
            ]}
          >
            <li className="bg-white hover:opacity-70 hover:-translate-y-2 transition-all duration-500 p-4 flex justify-between items-center cursor-pointer rounded-[20px_5px_5px_20px]">
              Stores <FontAwesomeIcon icon={faAngleRight} />{" "}
            </li>
          </Link>
        </ul>
      </section>
    </section>
  );
};

export default Menu;
