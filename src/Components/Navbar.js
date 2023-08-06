import React from "react";
import { useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";

function Navbar() {
  const navigate = useNavigate();
  const { user, logOut } = UserAuth();
  // console.log(user?.email);

  const handleLogout = async () => {
    try {
      await logOut();
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="flex justify-between items-center p-4 z-30 absolute w-full">
      <h1
        onClick={() => navigate("/")}
        className="text-red-500 text-3xl sm:text-4xl  cursor-pointer font-semibold "
      >
        NETFLIX
      </h1>
      {user?.email ? (
        <div className="flex gap-4">
          <button
            onClick={() => navigate("/account")}
            className="text-white hover:text-gray-400  font-mono  text-xs sm:text-md  "
          >
            ACCOUNT
          </button>
          <button
            onClick={handleLogout}
            className=" text-white hover:bg-[#E50914] bg-red-700  font-mono  px-4 py-2 rounded text-xs sm:text-md  "
          >
            LOGOUT
          </button>
        </div>
      ) : (
        <div className="flex gap-4">
          <button
            onClick={() => navigate("/login")}
            className="text-white hover:text-gray-400  font-mono  text-xs sm:text-md  "
          >
            SignIn
          </button>
          <button
            onClick={() => navigate("/signup")}
            className=" text-white hover:bg-[#E50914] bg-red-700  font-mono  px-4 py-2 rounded text-xs sm:text-md  "
          >
            SignUp
          </button>
        </div>
      )}
    </div>
  );
}

export default Navbar;

// cb4e5fd2afefb5f8fae76936c091fa97
