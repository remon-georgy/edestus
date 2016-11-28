import React, {PropTypes} from 'react';
import {Toolbar, ToolbarGroup} from 'material-ui/Toolbar';
import NavLink from './NavLink'

const styles = {
  toolbar: {
    backgroundColor:'white'
  }
}

const Header = ({links, logo}) => {
  const NavLinks = links.map(({title, path}) =>
    <NavLink key={title} path={path} title={title.toUpperCase()} />)

  return (
    <Toolbar style={styles.toolbar}>
      <ToolbarGroup>
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