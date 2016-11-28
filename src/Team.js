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
  teamContainer: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'nowrap',
    flexBasis: '100%',
    overflow: 'hidden',
  },
  teamMember: {
    flexGrow: 1,
    width: '282px',
    height: '282px',
    minWidth: '282px',
    minHeight: '282px',
  }
}

const TeamMember = ({image}, context) => {
  const staticPath = require(image)
  return (<div style={styles.teamMember}>
    <Image alt={staticPath} src={staticPath} />
  </div>)
}
TeamMember.propTypes = {
  image: PropTypes.string.isRequired,
}

const Team = ({title, members}) => {
  const team = members.map((member) => <TeamMember key={member.ID} image={member.image}/>)

  return (
    <div>
      <div style={styles.title}>{title}</div>
      <div style={styles.teamContainer}>
        {team}
      </div>
    </div>
  )
}
Team.propTypes = {
  title: PropTypes.string.isRequired,
  members: PropTypes.array.isRequired,
}

export default Team;