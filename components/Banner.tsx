import React, { useEffect, useState } from 'react'
import Image from 'next/image';
import { Movie } from '../types';
import { baseUrl } from '../constants/movie'

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
    <div>
      <div className="absolute top-0 left-0 -z-10 h-[95vh] w-full">
        <Image
          src={ `${baseUrl}${movie?.backdrop_path || movie?.poster_path}` }
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className="banner-text h-full">
        <h1 className="text-4xl font-bold text-white">{ movie?.title || movie?.name || movie?.original_name }</h1>
        <p className="max-w-xs text-xs text-shadow-md md:max-w-lg md:text-lg lg:max-w-2xl lg:text-2xl">
          { movie?.overview }
        </p>
      </div>
    </div>
  )
}

export default Banner
