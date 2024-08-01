import React, { useState } from "react";
import SalesCard from "../components/Cards/SalesCard";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPerson,
  faPersonDress,
  faChildReaching,
} from "@fortawesome/free-solid-svg-icons";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import TextCarousel from "../components/General-Use/TextCarousel";

const text = ["Sales", "Sales", "Sales", "Sales", "Sales"];

const Sales = () => {
  const [gender, setGender] = useState("men");
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5555/sales/" + gender)
      .then((res) => setProducts(res.data.products));
  }, [gender]);

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
    <section id="Sales" className="my-12 p-6 bg-gray-100 flex flex-col">
      <div className="w-1/2 lg:w-1/3 flex justify-center items-center p-4">
        <TextCarousel
          text={text}
          textColor="red"
          animation="animate-slideLeft"
        />
      </div>
      <div className="flex self-start p-4 mx-3 my-3 justify-center items-center text-3xl text-white bg-black rounded-[10px_5px_5px_0px]">
        <FontAwesomeIcon
          icon={faPerson}
          className={` px-4 cursor-pointer ${
            gender === "men" && "text-blue-500"
          }`}
          onClick={() => setGender("men")}
        />
        <FontAwesomeIcon
          icon={faPersonDress}
          className={`border-r-2 border-l-2 border-blue-300 px-4 cursor-pointer ${
            gender === "women" && "text-pink-500"
          } `}
          onClick={() => setGender("women")}
        />
        <FontAwesomeIcon
          icon={faChildReaching}
          className={` px-4 cursor-pointer ${
            gender === "children" && "text-orange-500"
          }`}
          onClick={() => setGender("children")}
        />
      </div>
      <div className="p-6">
        <Carousel responsive={responsive} swipeable={true} className="z-0">
          {products.slice(0, 12).map((product, index) => {
            return (
              <Link key={index} to={"/product/" + product._id}>
                <SalesCard data={product} key={index} />
              </Link>
            );
          })}
        </Carousel>
      </div>
    </section>
  );
};

export default Sales;
