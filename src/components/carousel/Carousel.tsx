// Carousel.tsx
import React, { useState, useEffect } from 'react';
import SwipeableViews from 'react-swipeable-views';
import { virtualize } from 'react-swipeable-views-utils';
import { mod } from 'react-swipeable-views-core';
import { Box } from '@material-ui/core';
import "./carousel.scss"
const VirtualizeSwipeableViews = virtualize(SwipeableViews);

interface CarouselProps {
  images: string[];
}

const Carousel: React.FC<CarouselProps> = ({ images }) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIndex(prevIndex => mod(prevIndex + 1, images.length));
    }, 5000); // Auto-play interval in milliseconds
    return () => clearInterval(intervalId);
  }, [images.length]);

  const handleChangeIndex = (index: number) => {
    setIndex(mod(index + 1, images.length));
  };

  const slideRenderer = ({ index }: { index: number }) => {
    const firstIndex = mod(index, images.length);
    const secondIndex = mod(index + 1, images.length);
    const thirdIndex = mod(index + 2, images.length);
    const fourthIndex = mod(index + 3, images.length);

    return (
      <div className="carousel-row">
        <img src={images[firstIndex]} alt={`Product ${firstIndex + 1}`} className="carousel-image" />
        <img src={images[secondIndex]} alt={`Product ${secondIndex + 1}`} className="carousel-image" />
        <img src={images[thirdIndex]} alt={`Product ${thirdIndex + 1}`} className="carousel-image" />
        <img src={images[fourthIndex]} alt={`Product ${fourthIndex + 1}`} className="carousel-image" />
      </div>
    );
  };

  return (
    <Box position="relative">
      <VirtualizeSwipeableViews
        index={index}
        onChangeIndex={handleChangeIndex}
        slideRenderer={slideRenderer}
        enableMouseEvents // Allow mouse events to trigger swipe actions
        slideCount={images.length} // Total slides
        containerStyle={{ overflow: 'visible' }} // Ensure images overflow properly
      />
    </Box>
  );
};

export default Carousel;
