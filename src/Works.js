import React, {PropTypes} from 'react';
import Image from './Image';

const styles = {
  title: {
    fontSize: '42px',
    lineHeight: '57px',
    letterSpacing: '-1px',
    color: '#333333',
    paddingTop: '45px',
    paddingBottom: '45px',
  },
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
Work.propTypes = {
  image: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired
}

const Works = ({title, works}) => {
  console.log(works)
  const work = works.map((work, i) =>
    <Work style={styles.work} key={i} image={work.image} alt={`${i}`} />);

  return (
    <div style={styles.container}>
      <div style={styles.title}>{title}</div>
      <div style={styles.workContainer}>
        {work}
      </div>
    </div>
  )
}
Works.propTypes = {
  title: PropTypes.string.isRequired,
  works: PropTypes.array.isRequired
}

export default Works;