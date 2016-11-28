import React, {PropTypes} from 'react';
import Divider from 'material-ui/Divider';
import {Toolbar, ToolbarGroup} from 'material-ui/Toolbar';
import NavLink from './NavLink'
import {capitalize} from 'lodash'

const styles = {
  container: {
    backgroundColor: '#1B1B1B',
    color: '#CBCBCB',
    padding: '45px 120px 45px 120px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start'
  },
  logo: {
    fontSize: '20px',
    lineHeight: '20px',
    letterSpacing: '2px',
    color: 'white',
  },
  divider: {
    width: '100%',
    marginBottom: '23px',
    marginTop: '23px'
  },
  toolbar: {
    backgroundColor: '#1B1B1B',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%'
  }
}

const Footer = ({logo, links, icons}) => {
  const navLinks = links.map(({title, path}) =>
    <NavLink key={title} path={path} title={capitalize(title)} />)
  
  return (
    <div style={styles.container}>
      <div style={styles.logo}>{logo}</div>
      <Divider style={styles.divider}/>
      <Toolbar style={styles.toolbar}>
        <ToolbarGroup firstChild={true}>
          {navLinks}
        </ToolbarGroup>
        <ToolbarGroup lastChild={true}>
          {icons}
        </ToolbarGroup>
      </Toolbar>
    </div>
  )
}
Footer.propTypes = {
  logo: PropTypes.node.isRequired,
  links: PropTypes.array.isRequired,
  icons: PropTypes.array.isRequired,
}

export default Footer