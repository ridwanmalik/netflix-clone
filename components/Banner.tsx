import React, { useEffect, useState } from 'react'
import Image from 'next/image';
import { Movie } from '../types';
import { baseUrl } from '../constants/movie'
import { BiInfoCircle } from 'react-icons/bi';
import { BsPlay } from 'react-icons/bs';
import { IoPlayOutline } from "react-icons/io5";
interface Props {
  movies: Movie[]
}

const Banner = ({ movies }: Props) => {
  const [movie, setMovie] = useState<Movie | null>(null)

  useEffect(() => {

    const randomNumber = Math.floor(Math.random() * movies.length)
    setMovie(movies[randomNumber])

  }, [movies])


  return (
    <div className="flex flex-col justify-center space-y-2 py-16 md:space-y-4 h-[95vh] lg:pb-12">
      <div className="absolute top-0 left-0 -z-20 h-[95vh] w-full">
        <Image
          src={ `${baseUrl}${movie?.backdrop_path || movie?.poster_path}` }
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className="absolute top-0 left-0 -z-10 h-[95vh] w-full bg-gradient-bottom">
      </div>
      <div className="container mx-auto px-4 lg:max-w-7xl">
        <h1 className="text-2xl font-bold mb-3 md:text-4xl lg:text-6xl max-w-xs md:max-w-lg lg:max-w-2xl">
          { movie?.title || movie?.name || movie?.original_name }
        </h1>
        <p className="text-xs text-shadow-md max-w-xs md:max-w-lg lg:max-w-2xl md:text-lg lg:text-xl mb-8">
          { movie?.overview }
        </p>
        <div className="flex space-x-3">
          <button className="banner-button bg-white text-black">
            <IoPlayOutline className="text-xl text-black leading-4" /> Play
          </button>
          <button className="banner-button bg-[gray]/70">
            More Info <BiInfoCircle className="text-xl leading-4" />
          </button>
        </div>
      </div>

    </div>
  )
}

export default Banner
