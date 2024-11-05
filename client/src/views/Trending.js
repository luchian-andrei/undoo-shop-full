import React, { useState } from "react";
import TrendingCard from "../components/Cards/TrendingCard";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPerson,
  faPersonDress,
  faChildReaching,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import TextCarousel from "../components/General-Use/TextCarousel";

import { getTrendingProducts } from "../api/home";
import { useQuery } from "@tanstack/react-query";
import ProductSkeleton from "../components/loaders/ProductSkeleton";

const text = ["Popular", "Popular", "Popular", "Popular", "Popular"];
const skeletons = [1, 2, 3, 4, 5];

const Trending = () => {
  const [gender, setGender] = useState("men");

  const { data, status } = useQuery({
    queryKey: ["trending", gender],
    queryFn: () => getTrendingProducts(gender),
  });

  const products = data?.products;

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <section className="my-12 p-6 bg-gray-100 flex flex-col">
      <div className="w-1/2 lg:w-1/3 flex justify-center items-center p-4">
        <TextCarousel
          text={text}
          textColor="black"
          animation="animate-slideLeft"
        />
      </div>
      <div className="flex self-start p-4 mx-3 my-3 justify-center items-center text-3xl text-white bg-black rounded-[10px_5px_5px_0px]">
        <FontAwesomeIcon
          icon={faPerson}
          className={` px-4 cursor-pointer transition-colors duration-700 ${
            gender === "men" && "text-blue-500"
          }`}
          onClick={() => setGender("men")}
        />
        <FontAwesomeIcon
          icon={faPersonDress}
          className={`border-x-2 border-blue-300 px-4 cursor-pointer transition-colors duration-700 ${
            gender === "women" && "text-pink-500"
          } `}
          onClick={() => setGender("women")}
        />
        <FontAwesomeIcon
          icon={faChildReaching}
          className={` px-4 cursor-pointer transition-colors duration-700 ${
            gender === "children" && "text-orange-500"
          }`}
          onClick={() => setGender("children")}
        />
      </div>
      <div className="p-6">
        <Carousel responsive={responsive} swipeable={true} className="z-0">
          {status === "success"
            ? products?.slice(0, 12).map((product, index) => {
                return (
                  <Link key={index} to={"/product/" + product._id}>
                    <TrendingCard data={product} key={index} />
                  </Link>
                );
              })
            : skeletons.map((skeleton, index) => (
                <ProductSkeleton key={index} />
              ))}
        </Carousel>
      </div>
    </section>
  );
};

export default Trending;
