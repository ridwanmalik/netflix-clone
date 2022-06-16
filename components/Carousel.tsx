import { handleClientScriptLoad } from 'next/script';
import React, { WheelEvent, useState, useCallback, useEffect } from 'react'
import { DotButton, PrevButton, NextButton } from "./EmblaCarouselButtons";
import useEmblaCarousel from "embla-carousel-react";
import { Movie } from '../types';
import Thumbnail from './Thumbnail';

interface Props {
  title: string
  movies: Movie[]
}

const Carousel = ({ title, movies }: Props) => {
  const [viewportRef, embla] = useEmblaCarousel({
    loop: true,
    skipSnaps: false
  });
  const [prevBtnEnabled, setPrevBtnEnabled] = useState(false);
  const [nextBtnEnabled, setNextBtnEnabled] = useState(false);

  const scrollPrev = useCallback(() => embla && embla.scrollPrev(), [embla]);
  const scrollNext = useCallback(() => embla && embla.scrollNext(), [embla]);


  const onSelect = useCallback(() => {
    if (!embla) return;
    setPrevBtnEnabled(embla.canScrollPrev());
    setNextBtnEnabled(embla.canScrollNext());
  }, [embla]);

  useEffect(() => {
    if (!embla) return;
    onSelect();
    embla.on("select", onSelect);
  }, [embla, onSelect]);

  return (
    <div className="space-y-0.5 md:space-y-2 px-4">
      <h2 className="w-56 cursor-pointer text-sm font-semibold text-[#e5e5e5] transition duration-200 hover:text-white md:text-lg">{ title }</h2>
      <div className="wrapper">
        <div className="embla__viewport" ref={ viewportRef }>
          <div className="embla__container">
            { movies.map(movie => (

              <div className="embla__slide min-w-48 md:min-w-72" key={ movie.id }>
                <div className="embla__slide__inner">
                  <img
                    className="w-full h-full object-cover"
                    src={ `https://image.tmdb.org/t/p/w500${movie.backdrop_path || movie.poster_path}` }
                    alt="A cool cat."
                  />
                </div>
              </div>
            )) }
          </div>
        </div>
        <PrevButton onClick={ scrollPrev } enabled={ prevBtnEnabled } />
        <NextButton onClick={ scrollNext } enabled={ nextBtnEnabled } />
      </div>
    </div>
  )
}

export default Carousel
