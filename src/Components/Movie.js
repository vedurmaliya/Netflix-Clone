import React, { useState } from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { UserAuth } from "../context/AuthContext";
import { db } from "../firebase";
import { arrayUnion, doc, updateDoc } from "firebase/firestore";

function Movie({ item }) {
  const [like, setLike] = useState(false);
  const { user } = UserAuth();
  const [saved, setSaved] = useState(false);

  const movieId = doc(db, "users", `${user?.email}`);

  const saveMovie = async () => {
    if (user?.email) {
      setLike(!like)
      setSaved(!saved)

      await updateDoc(movieId, {
        savedMovies: arrayUnion({
          id: item.id,
          title: item.title,
          img: item.backdrop_path,
        }),
      });
    } else {
      alert("Please Log In to save movies");
    }
  };

  return (
    <div className="w-[49%] sm:w-[32%] lg:w-[24%] inline-block relative p-1 ml-[1%]  ">
      <img
        src={`https://image.tmdb.org/t/p/original/${item?.backdrop_path}`}
        alt={item.rowHeading}
        className="w-full h-auto "
      />
      <div className="text-white absolute top-0 left-1 w-full h-full  hover:bg-black/80  opacity-0 hover:opacity-100 ">
        <p className="font-semibold w-full h-full text-sm sm:text-md lg:text-lg flex justify-center items-center px-4">
          {item?.title}
        </p>
        <p
          onClick={saveMovie}
          className="absolute top-4 left-4 text-md sm:text-lg lg:text-xl"
        >
          {" "}
          {like ? <FaHeart /> : <FaRegHeart />}
        </p>
      </div>
    </div>
  );
}

export default Movie;
