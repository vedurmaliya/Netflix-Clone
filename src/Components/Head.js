import React, { useEffect, useState } from 'react'
import axios from 'axios';
import requests from '../requests'

function Head() {

    const [movies, setMovies] = useState([])

    const movie = movies[Math.floor(Math.random() * movies.length)]

    useEffect(() => {
        axios.get(requests.Trending).then((res) => setMovies(res.data.results))
    }, [])

    // console.log(movie);

    function truncateString(string , number){
        if (string?.length > number){
            return string.slice(0,number) + "...";

        }
        else return string;
    }

    

    return (



        <div className='w-full h-screen sm:h-[550px] lg:h-screen text-white'>
            <div className='w-full h-full '>

                <div className='w-full h-screen sm:h-[550px] lg:h-screen bg-gradient-to-r from-black absolute z-10 '></div>
                <img src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`} alt={movie?.title} className='w-full h-full object-cover ' />


                <div className='absolute top-[30%] z-20 mx-[5%] sm:mx-[3%] lg:mx-[1%]'>
                <h1 className='text-3xl sm:text-4xl md:text-5xl font-bold'>{movie?.title}</h1>
                <div className='flex gap-2 my-2'>
                    <button className='border px-4 py-[4px] hover:bg-gray-400 bg-red-500 border-black hover:text-red-500  rounded'>PLAY</button>
                    <button className='border px-4 py-[4px] rounded hover:bg-gray-500 hover:text-black'>Watch Later</button>
                </div>
                <p className='text-sm text-gray-400 mb-1'>Released : {movie?.release_date}</p>
                <p className='text-sm w-3/4 sm:max-w-[50%] md:max-w-[70%]'>{truncateString(movie?.overview, 150)}</p>
                </div>

            </div>

        </div>
    )
}

export default Head