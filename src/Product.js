import React from 'react';
import FlatButton from 'material-ui/FlatButton';

import Image from './Image'

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'row',
    flexBasis: '100%'
  },
  productDescription: {
    flexOrder: 1,
    flexGrow: 1,
    alignItems: 'left',
  },
  downloadButton: {
    width: '254px',
    height: '69px',
    backgroundColor: '#EB6662',
    borderRadius: '40px',
    color: 'white',
    fontSize: '12px',
    fontWeight: 600,
    letterSpacing: '2px'
  },
  productImage: {
    flexGrow: 1,
    flexOrder: 2,
  },
}

const Product = ({title, image, text}) => {
  return (
    <div style={styles.container}>
      <div style={styles.productDescription}>
        <h2>{title}</h2>
        <p>
          {text}
        </p>
        <FlatButton style={styles.downloadButton}>DOWNLOAD THE APP</FlatButton>
      </div>
      <div style={styles.productImage}>
        <Image alt='iphone_6' src={image}/>
      </div>
    </div>
  )
}

export default Product