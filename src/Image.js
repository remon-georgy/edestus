import React, {PropTypes} from 'react'

const Image = ({src, alt}) => <img src={src} alt={alt} style={{maxWidth: '100%', maxHeight: '100%'}}/>;

Image.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired
}


export default Image