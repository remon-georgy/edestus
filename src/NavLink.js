import React from 'react'
import {isEmpty} from 'lodash';
import NavButton from './NavButton'

import Scrollchor from 'react-scrollchor';


const NavLink = ({title, path}) => {
  const button = NavButton(title)
  
  if (!isEmpty(path)) {
    return <Scrollchor to={path}>{button}</Scrollchor>
  }
  
  return button;
}

export default NavLink;