import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error , setError] = useState("")
  const navigate = useNavigate();

  const { user, logIn } = UserAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("")

    try {
      await logIn(email, password);
      navigate("/");
    } catch (err) {
      console.log(err);
      setError(err.message)
    }
  };

  console.log(error);

  return (
    <>
      <img
        className=" block w-full h-full absolute object-cover "
        src="https://assets.nflxext.com/ffe/siteui/vlv3/39f3c979-c105-4948-9c51-611eedf3a6fd/71ec72f0-c17a-4100-a2a3-a52e7b8ac733/IN-en-20230612-popsignuptwoweeks-perspective_alpha_website_large.jpg"
        alt="/"
      />
      <div className="bg-black/40 w-full h-screen z-20 fixed "></div>

      <div className="z-50 text-white fixed w-[80%] mx-[10%] sm:w-[50%] sm:mx-[25%] lg:w-[35%] lg:mx-[32%] gap-2 flex flex-col items-center sm:min-h-[400px] h-[70%] sm:h-[50%] my-24  bg-black/70">
        <div className="text-2xl lg:text-3xl  mt-10 mb-4">Sign In</div>

        <div>
        {error ? <p>{alert(error)}</p> : null}

        </div>
        


        <form className="flex flex-col w-[80%] " onSubmit={handleSubmit}>
          <input
            className="bg-gray-700 p-2 my-2 text-sm rounded-sm"
            type="email"
            placeholder="Email or Phone Number"
            onChange={(event) => {
              setEmail(event.target.value);
            }}
          />
          <input
            className="bg-gray-700 p-2 my-2 text-sm rounded-sm"
            type="password"
            placeholder="Password"
            onChange={(event) => {
              setPassword(event.target.value);
            }}
          />
          <button className=" text-white hover:bg-[#E50914] bg-red-700  font-mono  rounded-sm text-sm  my-2 py-2  ">
            Login
          </button>
        </form>
        <div className="flex justify-between  w-[80%] ">
          <p className="text-xs text-gray-500 flex justify-center items-center gap-1">
            <input type="checkbox"></input>Remember Me
          </p>
          <p className="text-xs text-gray-500 hover:text-white">Need Help?</p>
        </div>

        <div className="my-4 ">
          <p className="text-sm text-gray-400 text-center py-1">
            Don't have an account?
          </p>
          <p
            className="text-sm text-gray-400 text-center hover:text-white"
            onClick={() => navigate("/signup")}
          >
            Create an account
          </p>
        </div>
      </div>
    </>
  );
}

export default Login;
