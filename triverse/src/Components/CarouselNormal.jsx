import React from 'react';
import ReactDOM from 'react-dom';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

export default CarouselNormal = ({ onChange, onClickItem, onClickThumb }) => (
  <Carousel showArrows={true} onChange={onChange} onClickItem={onClickItem} onClickThumb={onClickThumb}>
    <div>
      <img src="https://daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.jpg" alt="Slide 1" />
      <p className="legend">Legend 1</p>
    </div>
    <div>
      <img src="https://daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.jpg" alt="Slide 2" />
      <p className="legend">Legend 2</p>
    </div>
    <div>
      <img src="https://daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.jpg" alt="Slide 3" />
      <p className="legend">Legend 3</p>
    </div>
    <div>
      <img src="https://daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.jpg" alt="Slide 4" />
      <p className="legend">Legend 4</p>
    </div>
    <div>
      <img src="https://daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.jpg" alt="Slide 5" />
      <p className="legend">Legend 5</p>
    </div>
    <div>
      <img src="https://daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.jpg" alt="Slide 6" />
      <p className="legend">Legend 6</p>
    </div>
  </Carousel>
);