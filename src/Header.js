import React from 'react';
import {Toolbar, ToolbarGroup} from 'material-ui/Toolbar';
import NavLink from './NavLink'

const styles = {
  toolbar: {
    backgroundColor:'white'
  }
}

const Header = ({links, logo}) => {
  console.log(links)
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

export default Header