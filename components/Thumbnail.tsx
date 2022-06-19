import React from 'react'
import { Movie } from '../types'
import Image from 'next/image';
import { getMovieName } from '../utils/helpers';

interface Props {
  movie: Movie
}

const Thumbnail = ({ movie }: Props) => {
  return (
    <div className="relative px-1 cursor-pointer h-40 min-w-48 md:min-w-72">
      <div className="flex w-full h-full relative">
        <Image
          className="w-full h-full object-cover rounded"
          src={ `https://image.tmdb.org/t/p/w500${movie.backdrop_path || movie.poster_path}` }
          alt={ getMovieName(movie) }
          layout="fill"
          priority={ true }
        />
      </div>
    </div>
  )
}

export default Thumbnail
