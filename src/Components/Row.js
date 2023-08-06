import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Movie from './Movie';
import {MdChevronLeft , MdChevronRight} from "react-icons/md"

function Row(props) {

    const [movies, setMovies] = useState([]);
    

    useEffect(() => {
        axios.get(props.URL).then((res) => setMovies(res.data.results))
    }, [URL])


    function createImageCard(item, id) {
        return <Movie key={id} item={item}/>
    }

    const clickLeft = () =>{
        var slider = document.getElementById(props.rowId )
        slider.scrollLeft = slider.scrollLeft - 400 ; 

    }

    const clickRight = () =>{
        var slider = document.getElementById(props.rowId )
        slider.scrollLeft = slider.scrollLeft + 400; 

    }


    return (
        <div className='my-2' >
            <div className='text-white font-bold text-md sm:text-lg lg:text-2xl pl-2 sm:pl-5 py-4'>{props.rowHeading}</div>
            <div className='relative  flex items-center justify-center group'>
            <MdChevronLeft onClick={clickLeft} size={30} color='white' className='absolute sm:text-5xl left-[1.6%] z-10 border-2 rounded-full hover:bg-black/20 hidden group-hover:block'></MdChevronLeft>
                <div id={props.rowId} className='w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide     '>
                    {movies.map(createImageCard)}
                </div>
                <MdChevronRight onClick={clickRight} size={30} color='white' className='absolute right-[1.6%] z-10 border-2 rounded-full  hover:bg-black/20 hidden group-hover:block'></MdChevronRight>

            </div>

        </div>
    )
}

export default Row  