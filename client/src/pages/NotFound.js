import React from "react";

import { Link, useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <section className="h-screen flex overflow-x-hidden flex-col">
      <section className="flex flex-col justify-center items-center h-screen py-12">
        <p className="p-24 text-5xl font-semibold text-center"> Error 404 !</p>
        <p className="py-10 text-xl text-center">
          The page that you're looking for doen't exist or has been moved{" "}
          <span className="text-4xl ml-4">🕵️</span>
        </p>
        <p className="pb-10 text-xl text-center">
          Let our team deal with this while you enjoy your shopping
        </p>
        <button
          className="p-4 rounded-md bg-black text-white hover:opacity-80"
          onClick={() => navigate("/")}
        >
          Go back home
        </button>
      </section>
    </section>
  );
};

export default NotFound;
