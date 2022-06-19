import React, { useEffect, useState } from 'react'
import Image from 'next/image';
import { Movie } from '../types';
import { BiInfoCircle } from 'react-icons/bi';
import { IoPlayOutline } from "react-icons/io5";
import { getMovieName, getMovieBannerUrl, getRandomNumber } from '../utils/helpers';
interface Props {
  movies: Movie[]
}

const Banner = ({ movies }: Props) => {
  const [movie, setMovie] = useState<Movie | null>(null)

  useEffect(() => {

    const randomNumber = getRandomNumber(0, movies.length - 1)
    setMovie(movies[randomNumber])
    console.log(`Log | file: Banner.tsx | line 19 | movies[randomNumber]`, movies[randomNumber])

  }, [movies])


  return (
    <div className="banner-wrapper">
      <div className="banner-image">
        <Image
          src={ getMovieBannerUrl(movie) }
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className="banner-gradient">
      </div>
      <div className="banner-container">
        <h1 className="banner-movie-name">
          { getMovieName(movie) }
        </h1>
        <p className="banner-movie-overview">
          { movie?.overview }
        </p>
        <div className="banner-button-group">
          <button className="banner-button banner-button-play">
            <IoPlayOutline className="banner-button-icon" /> Play
          </button>
          <button className="banner-button banner-button-info">
            <BiInfoCircle className="banner-button-icon" /> Info
          </button>
        </div>
      </div>
    </div>
  )
}

export default Banner
