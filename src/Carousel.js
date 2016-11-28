import React from 'react'

import {Card, CardMedia} from 'material-ui/Card';

const Carousel = ({image}) => {
  return (
    <Card>
      <CardMedia>
        <img alt='carouselItem' src={image}/>
      </CardMedia>
    </Card>
  )
}

export default Carousel;