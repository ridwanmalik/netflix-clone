import React from 'react'
import { Movie } from '../types'
import Image from 'next/image';
import { getMovieName, getMovieThumbnailUrl } from '../utils/helpers';

interface Props {
  movie: Movie
}

const Thumbnail = ({ movie }: Props) => {
  return (
    <div className="carousel-thumbnail">
      <div className="carousel-thumbnail-inner">
        <Image
          className="carousel-thumbnail-image"
          src={ getMovieThumbnailUrl(movie) }
          alt={ getMovieName(movie) }
          layout="fill"
          priority={ true }
        />
      </div>
    </div>
  )
}

export default Thumbnail
