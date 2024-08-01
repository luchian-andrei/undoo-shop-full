import React from "react";
import { useState } from "react";

const CreateAccountSection = () => {
  const [updateMessage, setUpdateMessage] = useState(false);

  return (
    <section className="h-full overflow-y-auto pt-16 pb-5 mb-5 no-scrollbar flex flex-col justify-center items-center">
      {!updateMessage ? (
        <div className="  flex flex-col gap-5 justify-center items-center h-full">
          <input
            type="email"
            name="email"
            className="py-3 sm:px-10 px-4 rounded-md text-base border-2 border-gray-400"
            placeholder="Email"
          />
          <input
            type="password"
            name="password"
            className="py-3 sm:px-10 px-4 rounded-md text-base border-2 border-gray-400"
            placeholder="Password"
          />
          <input
            type="text"
            name="first-name"
            className="py-3 sm:px-10 px-4 rounded-md text-base border-2 border-gray-400"
            placeholder="First name"
          />
          <input
            type="text"
            name="last-name"
            className="py-3 sm:px-10 px-4 rounded-md text-base border-2 border-gray-400"
            placeholder="Last name"
          />
          <div className="text-base flex justify-center items-center gap-2">
            <input type="checkbox" name="terms" className="h-6 w-6" />
            <label htmlFor="terms">
              I agree with the terms and conditions.
            </label>
          </div>
          <button
            className="bg-black p-2 rounded-md text-white"
            onClick={() => setUpdateMessage(true)}
          >
            Create Account
          </button>
        </div>
      ) : (
        <p>This option will be available with the next update</p>
      )}
    </section>
  );
};

export default CreateAccountSection;
