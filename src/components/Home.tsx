// Home.tsx
import React from 'react';
import Carousel from './carousel/Carousel';

function Home() {
  const images = [
    'photoframe1.jpg',
    'photoframe1.jpg','photoframe1.jpg','photoframe1.jpg','photoframe1.jpg','photoframe1.jpg','photoframe1.jpg','photoframe1.jpg','photoframe1.jpg','photoframe1.jpg','photoframe1.jpg',
  ];

  return (
    <div className="home">
      <h2>Welcome to My Awesome Store</h2>
      <p>Explore our latest products and deals</p>
      <Carousel images={images} />
    </div>
  );
}

export default Home;
