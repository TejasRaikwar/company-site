import React from 'react'
import './SliderMainComponent.css'
import HeroSlider from '../HeroSlider1/HeroSlider'
const SliderMainComponent = () => {
  return (
    <div className="SliderMainComponent-main">
      <div className="child-slider">
        <HeroSlider />
      </div> 
    </div>
  );
}

export default SliderMainComponent