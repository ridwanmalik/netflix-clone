import React from 'react'
import { Movie } from '../types'
import Image from 'next/image';

interface Props {
  movie: Movie
}

const Thumbnail = ({ movie }: Props) => {
  return (
    <div className="relative h-28 w-[180px] cursor-pointer transition duration-200 ease-out md:h-36 md:w-[260px]">
      <Image
        src={ `https://image.tmdb.org/t/p/w500${movie.backdrop_path || movie.poster_path
          }` }
        className="rounded-sm object-cover md:rounded"
        layout="fill"
      />
    </div>
  )
}

export default Thumbnail
