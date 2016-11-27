import {Card, CardMedia} from 'material-ui/Card';
import React from 'react';
import MapComponent from 'react-cartographer/lib/components/Map';

const getStyles = () => {
  return {
    map: {
      maxWidth: '100%',
      maxHeight: '100%'
    }
  }
}

// TODO pass props from parent.
const Location = ((address) => {
  const styles = getStyles()
  return (
    <Card>
      <CardMedia style={styles.map}>
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

export default Location