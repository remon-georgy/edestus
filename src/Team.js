
import React from 'react';
import Image from './Image';

const styles = {
  teamContainer: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'nowrap',
    flexBasis: '100%',
    overflow: 'hidden',
    // TODO    justifyContent: 'space-between'
  },
  teamMember: {
    flexGrow: 1,
    width: '282px',
    height: '282px',
    minWidth: '282px',
    minHeight: '282px',
  }
}

const TeamMember = ({ID, image}, context) => {
  const staticPath = require(image)
  return (<div style={styles.teamMember}>
    <Image alt={staticPath} src={staticPath} />
  </div>)
}

const Team = ({members}) => {
  const team = members.map((member) => <TeamMember key={member.ID} image={member.image}/>)

  return (
    <div>
      <h2>Our Team</h2>
      <div style={styles.teamContainer}>
        {team}
      </div>
    </div>
  )
}

export default Team;