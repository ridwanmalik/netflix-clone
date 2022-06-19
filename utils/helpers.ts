import { Movie } from '../types'
import { baseUrlOriginal, baseUrlW500 } from '../constants/movie'

// Make Css Class
export const makeClass = (string: string) =>
  string
    .toLowerCase()
    .replace(/ /g, '-')
    .replace(/[^a-zA-Z0-9-]/g, '')

// Get Random Number
export const getRandomNumber = (min: number, max: number) =>
  Math.floor(Math.random() * (max - min + 1)) + min

// Get Movie Name
export const getMovieName = (movie: Movie | null) =>
  movie?.title || movie?.name || movie?.original_name

// Get Movie Banner Url
export const getMovieBannerUrl = (movie: Movie | null) =>
  `${baseUrlOriginal}${movie?.backdrop_path || movie?.poster_path}`

// Get Movie Thumbnail Url
export const getMovieThumbnailUrl = (movie: Movie | null) =>
  `${baseUrlW500}${movie?.backdrop_path || movie?.poster_path}`
