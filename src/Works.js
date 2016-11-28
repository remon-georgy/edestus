import React from 'react';
import Image from './Image';

const styles = {
  workContainer: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    flexBasis: '100%',
  },
  work: {
    flexGrow: 1,
    width: '480px',
    height: '480px',
    minWidth: '480px',
    minHeight: '480px',
  },
  container: {
    backgroundColor: '#F4F4F4'
  }
}

const Work = ({image, alt}, context) => {
  const staticPath = require(image)
  return (<Image src={staticPath} alt={alt}/>)
}

const Works = ({works}) => {
  console.log(works)
  const work = works.map((work, i) => <Work style={styles.work} key={i} image={work.image}/>);

  return (
    <div style={styles.container}>
      <h2>Our Work</h2>
      <div style={styles.workContainer}>
        {work}
      </div>
    </div>
  )
}

export default Works;