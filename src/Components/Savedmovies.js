import React, { useEffect } from "react";
import { UserAuth } from "../context/AuthContext";
import { db } from "../firebase";
import { doc, updateDoc, onSnapshot } from "firebase/firestore";

import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import { useState } from "react";
import {AiOutlineClose}  from "react-icons/ai"

function Savedmovies(props) {
  const [movies, setMovies] = useState([]);
  const { user } = UserAuth();

  

  useEffect(() => {
    onSnapshot(doc(db, "users", `${user?.email}`), (doc) => {
      setMovies(doc.data()?.savedMovies);
    });
  }, [user?.email]);

  const movieRef = doc(db, "users", `${user?.email}`);

  const deleteMovie = async(passedId) =>{
    try {
      const result = movies.filter((item) => item.id !== passedId)
      await updateDoc(movieRef,{
        savedMovies :result,
      }); 
    } catch (error) {
      console.log(error);
    }
  };

  

  function createImageCard(item, id) {
    return (
      <div
        className="w-[49%] sm:w-[32%] lg:w-[24%] inline-block relative p-1 ml-[1%]  "
        key={id}
      >
        <img
          src={`https://image.tmdb.org/t/p/original/${item?.img}`}
          alt={item.id}
          className="w-full h-auto "
        />
        <div className="text-white absolute top-0 left-1 w-full h-full  hover:bg-black/80  opacity-0 hover:opacity-100 ">
          <p className="font-semibold w-full h-full text-sm sm:text-md lg:text-lg flex justify-center items-center px-4">
            {item?.title}
          </p>

          <p className="absolute top-3 right-3" onClick={() => deleteMovie(item.id)}><AiOutlineClose></AiOutlineClose></p>
        </div>
      </div>
    );
  }
  const clickLeft = () => {
    var slider = document.getElementById(props.rowId);
    slider.scrollLeft = slider.scrollLeft - 400;
  };

  const clickRight = () => {
    var slider = document.getElementById(props.rowId);
    slider.scrollLeft = slider.scrollLeft + 400;
  };
  return (
    <>
      <div className="text-white font-bold text-md sm:text-lg lg:text-2xl pl-2 sm:pl-5 py-4">
        My Shows
      </div>
      <div className="relative  flex items-center justify-center group">
        <MdChevronLeft
          onClick={clickLeft}
          size={30}
          color="white"
          className="absolute sm:text-5xl left-[1.6%] z-10 border-2 rounded-full hover:bg-black/20 hidden group-hover:block"
        ></MdChevronLeft>
        <div
          id={"slider"}
          className="w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide     "
        >
          {movies.map(createImageCard)}
        </div>
        <MdChevronRight
          onClick={clickRight}
          size={30}
          color="white"
          className="absolute right-[1.6%] z-10 border-2 rounded-full  hover:bg-black/20 hidden group-hover:block"
        ></MdChevronRight>
      </div>
    </>
  );
}

export default Savedmovies;
