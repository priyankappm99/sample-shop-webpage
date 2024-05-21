// Home.tsx
import React from 'react';
import Carousel from './carousel/Carousel';
import SlideCarousel from './carousel/SlideCarousel';
import ProductList from './ProductList';
import { PRODUCTS } from '../constants/ProductsJson';

function Home() {
  const images = [
    'photoframe3.jpeg',
    'photoframe2.jpeg','photoframe3.jpeg','photoframe4.jpeg','photoframe5.jpeg','photoframe6.jpeg','photoframe4.jpeg','photoframe3.jpeg','photoframe2.jpeg','photoframe5.jpeg','photoframe2.jpeg',
  ];

  return (
    <div className="home">
      <h1 className='cyan-text' >Welome to My Awesome Store</h1>
      <p className='cyan-text'>Explore our latest products and deals</p>
      <Carousel images={images} />
      <div>
      {/* <SlideCarousel/> */}
      {/* <ProductList products={PRODUCTS}/> */}

      </div>
    </div>
  );
}

export default Home;
