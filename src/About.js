import React from 'react';
import FlatButton from 'material-ui/FlatButton';

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignContent: 'center',
    flexDirection: 'column',
    height: '100%',
    width: '100%',
    color: 'white',
    backgroundColor: '#0889FF'
  },
  quote: {
    marginLeft: '86px',
    marginRight: '86px',
    marginBottom: '29px'
  },
  contactButton: {
    color: 'white',
    width: '192px',
    height: '43px',
    border: '1px solid #FFFFFF',
    borderRadius: '40px',
    // TODO find an alternative
    alignSelf: 'center'
  }
}


const About = () => {
  return (
    
    <div style={styles.container}>
      <div style={styles.aboutUs}>
        <h2>About Us</h2>
        <div style={styles.quote}>“Nullam id dolor id nibh ultricies vehicula ut id elit. Integer posuere erat a ante venenatis dapibus posuere velit aliquet.”</div>
        <FlatButton style={styles.contactButton}>CONTACT US</FlatButton>
      </div>
      <div style={styles.map}>

      </div>

    </div>
  )
}

export default About