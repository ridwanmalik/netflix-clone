import { Movie } from '../types'
import { baseUrl } from '../constants/movie'
import classNames, { Argument } from 'classnames'

// Make Css Class
export const makeClass = (string: string) =>
  string
    .toLowerCase()
    .replace(/ /g, '-')
    .replace(/[^a-zA-Z0-9-]/g, '')

// Get Movie Name
export const getMovieName = (movie: Movie | null) =>
  movie?.title || movie?.name || movie?.original_name

// Get Movie Url
export const getMovieUrl = (movie: Movie | null) =>
  `${baseUrl}${movie?.backdrop_path || movie?.poster_path}`

// Get Random Number
export const getRandomNumber = (min: number, max: number) =>
  Math.floor(Math.random() * (max - min + 1)) + min
