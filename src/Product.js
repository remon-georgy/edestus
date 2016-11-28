import React, {PropTypes} from 'react';
import FlatButton from 'material-ui/FlatButton';

import Image from './Image'

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'row',
  },
  productDescription: {
    fontSize: '16px',
    lineHeight: '22px',
    color: '#B1B1B1',
    flexOrder: 1,
    flexGrow: 1,
    textAlign: 'left',
    padding: '10% 0 10% 10%',
    flexBasis: '100%',
  },
  downloadButton: {
    width: '254px',
    height: '69px',
    backgroundColor: '#EB6662',
    borderRadius: '40px',
    color: 'white',
    fontSize: '12px',
    fontWeight: 600,
    letterSpacing: '2px',
    flexBasis: '100%',
    marginTop: '10%'
  },
  productImage: {
    flexGrow: 1,
    flexOrder: 2,
  },
  title: {
    fontSize: '42px',
    lineHeight: '57px',
    letterSpacing: '-1px',
    color: '#333333',
    marginBottom: '10%'
  }
}

const Product = ({title, image, text}) => {
  return (
    <div style={styles.container}>

      <div style={styles.productDescription}>
        <div style={styles.title}>{title}</div>
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
Product.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
}

export default Product