import React from "react";
import Savedmovies from "../Components/Savedmovies";

function Account() {
  return (
    <>
      <>
        <div>
          <img
            className=" w-full h-56 sm:h-72 lg:h-96 absolute object-cover "
            src="https://assets.nflxext.com/ffe/siteui/vlv3/39f3c979-c105-4948-9c51-611eedf3a6fd/71ec72f0-c17a-4100-a2a3-a52e7b8ac733/IN-en-20230612-popsignuptwoweeks-perspective_alpha_website_large.jpg"
            alt="/"
          />
        </div>
        <div className="bg-black/40 w-full h-56 sm:h-72 lg:h-96 z-20 fixed "></div>

        <div className="text-white fixed top-[20%] sm:top-[30%] left-[10%] sm:left-[40%]  text-4xl z-20">
          My Shows
        </div>

<div className="z-30 pt-56 sm:pt-72 lg:pt-96">

        <Savedmovies></Savedmovies>
</div>
      </>
    </>
  );
}

export default Account;
