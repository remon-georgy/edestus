import React, {PropTypes} from 'react'
import {Slider, Slides, PrevArrow, NextArrow} from 'react-flex-slick'

const styles = {
  container: {
    margin: '0 auto',
    width: '100%',
  }
}
const Carousel = ({slides}) => {
  var settings = {
    infinite: true,
    swipe: true,
    draggable: true,
    arrows: true,
  };
  return (
    
    <div style={styles.container}>
      <Slider {...settings}>
        <PrevArrow activeClassName="non-infinite-left--active"
          inactiveClassName="non-infinite-left--inactive" />
        <Slides>
          {slides}
        </Slides>
        <NextArrow activeClassName="non-infinite-right--active"
          inactiveClassName="non-infinite-right--inactive" />
      </Slider>
    </div>
  );
}
Carousel.propTypes = {
  slides: PropTypes.array.isRequired
}

export default Carousel;