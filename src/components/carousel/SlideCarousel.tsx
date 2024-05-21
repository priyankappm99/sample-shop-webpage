import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import { EffectCoverflow, Pagination } from 'swiper/modules';

const SlideCarousel = () => {
  // Define the width and height for all slides
  const slideWidth = '100%';
  const slideHeight = '200px';

  return (
    <Swiper
      effect={'coverflow'}
      grabCursor={true}
      centeredSlides={true}
      slidesPerView={'auto'}
      coverflowEffect={{
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
      }}
      pagination={true}
      modules={[EffectCoverflow, Pagination]}
      className="mySwiper"
    >
      <SwiperSlide>
        <img
          src="https://swiperjs.com/demos/images/nature-1.jpg"
          style={{ width: slideWidth, height: slideHeight, objectFit: 'cover' }}
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src="https://swiperjs.com/demos/images/nature-2.jpg"
          style={{ width: slideWidth, height: slideHeight, objectFit: 'cover' }}
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src="https://swiperjs.com/demos/images/nature-3.jpg"
          style={{ width: slideWidth, height: slideHeight, objectFit: 'cover' }}
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src="https://swiperjs.com/demos/images/nature-4.jpg"
          style={{ width: slideWidth, height: slideHeight, objectFit: 'cover' }}
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src="https://swiperjs.com/demos/images/nature-5.jpg"
          style={{ width: slideWidth, height: slideHeight, objectFit: 'cover' }}
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src="https://swiperjs.com/demos/images/nature-6.jpg"
          style={{ width: slideWidth, height: slideHeight, objectFit: 'cover' }}
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src="https://swiperjs.com/demos/images/nature-7.jpg"
          style={{ width: slideWidth, height: slideHeight, objectFit: 'cover' }}
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src="https://swiperjs.com/demos/images/nature-8.jpg"
          style={{ width: slideWidth, height: slideHeight, objectFit: 'cover' }}
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src="https://swiperjs.com/demos/images/nature-9.jpg"
          style={{ width: slideWidth, height: slideHeight, objectFit: 'cover' }}
        />
      </SwiperSlide>
    </Swiper>
  );
}

export default SlideCarousel;
