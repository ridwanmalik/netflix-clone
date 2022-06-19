import React, { useState, useCallback, useEffect } from 'react'
import { PrevButton, NextButton } from "./EmblaCarouselButtons";
import useEmblaCarousel from "embla-carousel-react";
import { Movie } from '../types';
import { makeClass } from '../utils/helpers';
import Thumbnail from './Thumbnail';
interface Props {
  title: string
  movies: Movie[]
}

const Carousel = ({ title, movies }: Props) => {
  const [viewportRef, embla] = useEmblaCarousel({
    dragFree: true,
    loop: true,
    slidesToScroll: 6,
    skipSnaps: false,
    align: 0
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
    <div className="carousel-wrapper ">
      <h2 className="carousel-title">{ title }</h2>
      <div className="carousel-body">
        <div className={ `carousel-viewport ${makeClass(title)}` } ref={ viewportRef }>
          <div className="carousel-container">
            { movies.map(movie => (
              <Thumbnail movie={ movie } key={ movie.id } />
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
