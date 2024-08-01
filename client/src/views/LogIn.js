import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import CreateAccountSection from "../components/LogIn/CreateAccountSection";
import LogInSection from "../components/LogIn/LogInSection";
import LogInFooter from "../components/LogIn/LogInFooter";

const LogIn = ({ className, closeLogin, showLogin }) => {
  const [action, setAction] = useState("LogIn");

  return (
    <section
      id="LogIn"
      className={`h-4/5 lg:w-1/2 sm:w-3/4 w-full  px-4 py-6  flex flex-col fixed z-20 self-center ${
        showLogin ? "top-24" : "-top-full"
      }  bg-white text-black p-4 transition-all duration-1000 text-xl shadow-2xl`}
    >
      <FontAwesomeIcon
        icon={faXmark}
        onClick={closeLogin}
        className="self-end cursor-pointer text-3xl"
      />
      <section id="login-action" className="flex flex-col">
        <div className="flex justify-around items-center mb-3">
          <button onClick={() => setAction("LogIn")}>Log In</button>
          <button onClick={() => setAction("CreateAccount")}>
            Create Account
          </button>
        </div>

        <p
          className={
            action === "LogIn"
              ? "w-1/2 bg-black h-1 transition-all duration-500"
              : action === "CreateAccount"
              ? "w-1/2 bg-black h-1 translate-x-[85%] transition-all duration-500"
              : null
          }
        ></p>
      </section>
      {action === "LogIn" ? <LogInSection /> : <CreateAccountSection />}

      {action === "LogIn" ? (
        <LogInFooter
          question="New member ?"
          action="Create an account"
          setAction={() => setAction("CreateAccount")}
        />
      ) : (
        <LogInFooter
          question="Already a member ?"
          action="LogIn"
          setAction={() => setAction("LogIn")}
        />
      )}
    </section>
  );
};

export default LogIn;
