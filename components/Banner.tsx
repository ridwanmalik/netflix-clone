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
    </div>
  )
}

export default Banner
