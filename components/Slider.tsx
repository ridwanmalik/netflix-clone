import { handleClientScriptLoad } from 'next/script';
import React, { WheelEvent, useState } from 'react'
import { BiChevronLeft, BiChevronRight } from 'react-icons/bi';
import { Movie } from '../types';
import Thumbnail from './Thumbnail';

interface Props {
  title: string
  movies: Movie[]
}

const Slider = ({ title, movies }: Props) => {
  const [isMoved, setIsMoved] = useState(false)

  const horizontalScroll = (e: any) => {
    console.log(`Log | file: Slider.tsx | line 16 | e`, e)
    e.preventDefault()
    e.target.scrollLeft += e.deltaY
  }

  return (
    <div className="space-y-0.5 md:space-y-2 px-4">
      <h2 className="w-56 cursor-pointer text-sm font-semibold text-neutral-200 transition duration-200 hover:text-white md:text-lg">{ title }</h2>
      <BiChevronLeft
        className={ `absolute top-0 bottom-0 left-2 z-40 m-auto h-9 w-9 cursor-pointer opacity-0 transition hover:scale-125 group-hover:opacity-100 ${!isMoved ? 'hidden' : ''}` }
      // onClick={ () => handleClick('left') }
      />
      <div className="flex items-center space-x-0.5 overflow-x-auto md:space-x-2.5 md:p-2" onWheel={ horizontalScroll } >
        { movies.map(movie => (
          <Thumbnail movie={ movie } key={ movie.id } />
        )) }
      </div>
      <BiChevronRight
        className={ `absolute top-0 bottom-0 right-2 z-40 m-auto h-9 w-9 cursor-pointer opacity-0 transition hover:scale-125 group-hover:opacity-100` }
      // onClick={ () => handleClick('right') }
      />
    </div>
  )
}

export default Slider
