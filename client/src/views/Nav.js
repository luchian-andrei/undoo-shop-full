import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faBagShopping,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import { faUser, faBell, faHeart } from "@fortawesome/free-regular-svg-icons";
import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getNotifications } from "../api/notifications";
import { getCart } from "../api/cart";
import { getFavorites } from "../api/favorites";

const Nav = ({
  openMenu,
  openLogin,
  openNotifications,
  openCart,
  openSearchBar,
}) => {
  const { data: notificationsData } = useQuery({
    queryKey: ["notifications"],
    queryFn: getNotifications,
  });

  const { data: favoritesData } = useQuery({
    queryKey: ["favorites"],
    queryFn: getFavorites,
  });

  const { data: cartData } = useQuery({
    queryKey: ["cart"],
    queryFn: getCart,
  });

  const favorites = favoritesData?.count;
  const notifications = notificationsData?.count;
  const inCart = cartData?.count;

  return (
    <nav
      id="header"
      className="fixed top-0 z-20 w-full flex justify-between  p-4 bg-black text-white text-xl "
    >
      <section className="flex justify-center gap-4 items-center">
        <FontAwesomeIcon
          icon={faBars}
          onClick={openMenu}
          className="cursor-pointer"
        />
        <Link to={"/"}>
          <p className="font-semibold cursor-pointer"> Undoo Shop</p>
        </Link>
      </section>
      <section
        id="search-bar"
        className="flex gap-2 w-12 sm:w-3/5 py-2 justify-around items-center sm:bg-white bg-black text-black rounded-sm"
        onClick={openSearchBar}
      >
        <input
          type="text"
          placeholder="What are you looking for ?"
          className="placeholder:text-base p-1 w-3/4  focus:outline-none focus:placeholder:text-red-400 hidden sm:flex"
        />
        <FontAwesomeIcon
          icon={faMagnifyingGlass}
          className="cursor-pointer text-white sm:text-black"
        />
      </section>

      <section className="flex justify-center gap-6 items-center mx-4">
        <FontAwesomeIcon
          icon={faUser}
          className="cursor-pointer"
          onClick={openLogin}
        />
        <p className="w-5 h-5 rounded-full bg-red-400 text-white absolute z-20 top-5 right-32 text-sm text-center">
          {favorites}
        </p>
        <Link to={"/favourites"}>
          <FontAwesomeIcon icon={faHeart} className="cursor-pointer" />
        </Link>
        <p className="w-5 h-5 rounded-full bg-red-400 text-white absolute z-20 top-5 right-20 text-sm text-center">
          {notifications}{" "}
        </p>
        <FontAwesomeIcon
          icon={faBell}
          className="cursor-pointer"
          onClick={openNotifications}
        />
        <p className="w-5 h-5 rounded-full bg-red-400 text-white absolute z-20 top-5 right-10 text-sm text-center">
          {inCart}
        </p>
        <Link to={"/cart"}>
          <FontAwesomeIcon
            icon={faBagShopping}
            className="cursor-pointer"
            onClick={openCart}
          />
        </Link>
      </section>
    </nav>
  );
};

export default Nav;
