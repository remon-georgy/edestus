import React from 'react';
import FlatButton from 'material-ui/FlatButton';
import {Card, CardMedia} from 'material-ui/Card';
import MapComponent from 'react-cartographer/lib/components/Map';

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'row',
    
    alignItems: 'center',
    justifyContent: 'center'
    // height: '100%',
    // width: '100%',
  },
  
  aboutUs: {
    order: 1,
    flexGrow: 1,
    //alignItems: 'center',
    
    color: 'white',
    backgroundColor: '#0889FF',
  },
  location: {
    order: 2,
    flexGrow: 1,
    // flexBasis: '100%',
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
  },
}

// TODO pass props from parent.
const Location = ((address) => {
  return (
    <Card>
      <CardMedia>
        <MapComponent
          provider='google'
          providerKey=''
          mapId='map'
          addressLine1='350 W Georgia St'
          city='Vancouver'
          state='BC'
          country='Canada'
          zoom={15}
          height={600}
          width={600}
        />
      </CardMedia>
    </Card>
  )
})

const About = () => {
  return (
    
    <div style={styles.container}>
      <div style={styles.aboutUs}>
        <h2>About Us</h2>
        <div style={styles.quote}>“Nullam id dolor id nibh ultricies vehicula ut id elit. Integer posuere erat a ante venenatis dapibus posuere velit aliquet.”</div>
        <FlatButton style={styles.contactButton}>CONTACT US</FlatButton>
      </div>

      <div style={styles.location}>
        <Location />
      </div>
    </div>
  )
}

export default About