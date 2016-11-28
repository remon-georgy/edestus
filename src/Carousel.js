import React, {PropTypes} from 'react'
import {Slider, Slides, PrevArrow, NextArrow, Dots} from 'react-flex-slick'

const styles = {
  container: {
    margin: '0 auto',
    // padding: '40px',
    width: '100%',
  }
}
const slideStyle = {
  // width: 540,
  // height: 125,
  // backgroundColor: 'slateblue',
  color: 'white',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center'
};
const Carousel = ({slides}) => {
  
  // TODO
  // Autoresizer
  // TODO

  var settings = {
    infinite: true,
    swipe: true,
    draggable: true,
    // // speed: 500,
    // slidesToShow: 1,
    // slidesToScroll: 1,
    // arrows: true,
  };
  return (
    
    <div style={styles.container}>
      <Slider {...settings}>
        <div
          style={{width: 0, 'height': '20px', 'zIndex': 100}}>PREV</div>
        <Slides>
          {slides}
        </Slides>
        <div
          style={{width: '20px', 'height': '20px', 'zIndex': 100, 'left': '20px'}}>NEXT</div>
      </Slider>
    </div>
  );
}
Carousel.propTypes = {
  slides: PropTypes.array.isRequired
}

export default Carousel;