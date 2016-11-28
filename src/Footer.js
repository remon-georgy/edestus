import React from 'react';
import Divider from 'material-ui/Divider';
import FlatButton from 'material-ui/FlatButton';
import {Toolbar, ToolbarGroup} from 'material-ui/Toolbar';

import twitter from './images/twitter.png'
import gplus from './images/google-plus.png'
import facebook from './images/facebook.png'


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

const getNav = () => {
  return [
    'Product',
    'Works',
    'Team',
    'About',
    'Contact US'
  ]
}

// TODO Use icon font instead of images
const getSocialIcons = () => {
  return [
    <img key='facebook' alt='facebook' src={facebook}/>,
    <img key='twitter' alt='twitter' src={twitter}/>,
    <img key='gplus' alt='gplus' src={gplus}/>
  ]
}

const NavButton = ({children}) => {
  return (
    <FlatButton>{children}</FlatButton>
  )
}


const Footer = ({logo}) => {
  const navButtons = getNav().map((nav, i) => <NavButton key={i} children={nav} />);
  const icons = getSocialIcons()
  return (
    <div style={styles.container}>
      <div style={styles.logo}>{logo}</div>
      <Divider style={styles.divider}/>
      <Toolbar style={styles.toolbar}>
        <ToolbarGroup firstChild={true}>
          {navButtons}
        </ToolbarGroup>
        <ToolbarGroup lastChild={true}>
          {icons}
        </ToolbarGroup>
      </Toolbar>
    </div>
  )
}

export default Footer