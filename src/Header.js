import React, {PropTypes} from 'react';
import {Toolbar, ToolbarGroup} from 'material-ui/Toolbar';
import NavLink from './NavLink'

const styles = {
  toolbar: {
    backgroundColor:'white',
    height: '130px',
  },
  logo: {
    fontSize: '30px',
    lineHeight: '30px',
    letterSpacing: '4px',
    color: '#333333',
    paddingLeft: '130px'
  }
}

const Header = ({links, logo}) => {
  const NavLinks = links.map(({title, path}) =>
    <NavLink key={title} path={path} title={title.toUpperCase()} />)

  return (
    <Toolbar style={styles.toolbar}>
      <ToolbarGroup style={styles.logo}>
        {logo}
      </ToolbarGroup>
      <ToolbarGroup>
        {NavLinks}
      </ToolbarGroup>
    </Toolbar>
  )
}
Header.propTypes = {
  logo: PropTypes.node.isRequired,
  links: PropTypes.array.isRequired,
}

export default Header