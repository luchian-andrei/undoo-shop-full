import React from "react";
import { useState } from "react";

const LogInSection = () => {
  const [updateMessage, setUpdateMessage] = useState(false);
  return (
    <div className="flex flex-col justify-center items-center gap-10 py-6 h-full">
      {!updateMessage ? (
        <div className="flex flex-col justify-center items-center gap-10 py-6 h-full">
          <input
            type="email"
            className="py-3 sm:px-10 px-4 rounded-md text-base border-2 border-gray-400"
            placeholder="Email adress"
          />
          <input
            type="password"
            className="py-3 sm:px-10 px-4 text-base rounded-md border-2 border-gray-400"
            placeholder="Password"
          />
          <button
            type="submit"
            className="bg-black p-3 rounded-md text-white font-semibold"
            onClick={() => setUpdateMessage(true)}
          >
            Log In
          </button>
        </div>
      ) : (
        <p>This option will be available with the next update </p>
      )}
    </div>
  );
};

export default LogInSection;
