import React, { useEffect, useState } from 'react';
import "./Slider.component.css";
import {
    Carousel,
    CarouselItem,
    CarouselControl,
    CarouselIndicators,
    CarouselCaption
  } from 'reactstrap';

  const style={ height: "300px" }
  const items = [
    {
      src: 'https://didongviet.vn/blog/wp-content/uploads/2019/09/giai-ma-suc-hut-cua-the-he-iphone-11-tai-apple-event-nam-nay-banner.jpg',
      altText: 'Slide 1',
      caption: 'Slide 1'
    },
    {
      src: 'https://didongviet.vn/blog/wp-content/uploads/2019/07/banner-apple-watch-series-5-didongviet.jpg',
      altText: 'Slide 2',
      caption: 'Slide 2'
    },
    {
      src: 'https://bachlongmobile.com/bnews/wp-content/uploads/2020/06/macbook-pro-2019-2-2.jpg',
      altText: 'Slide 3',
      caption: 'Slide 3'
    }
  ];

const SliderComponent = () => {

    const [activeIndex, setActiveIndex] = useState(0);
    const [animating, setAnimating] = useState(false);
  
    const next = () => {
      if (animating) return;
      const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
      setActiveIndex(nextIndex);
    }
  
    const previous = () => {
      if (animating) return;
      const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
      setActiveIndex(nextIndex);
    }
  
    const goToIndex = (newIndex) => {
      if (animating) return;
      setActiveIndex(newIndex);
    }
  
    const slides = items.map((item) => {
      return (
        <CarouselItem
          className="custom-tag"
          tag="div"
          key={item.id}
          onExiting={() => setAnimating(true)}
          onExited={() => setAnimating(false)}
        >
        <img src={item.src} alt={item.altText} />
        </CarouselItem>
      );
    });
    return (
        <div>
            <style>
        {
          `.custom-tag {
              max-width: 100%;
              height: 565px;
              background: black;
            }`
        }
      </style>
      <Carousel
        activeIndex={activeIndex}
        next={next}
        previous={previous}
      >
        <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
        {slides}
        <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
        <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
      </Carousel>
        </div>
    );
}

export default SliderComponent;