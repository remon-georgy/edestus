import React, {PropTypes} from 'react'
import FlatButton from 'material-ui/FlatButton';

const NavButton = (title) => <FlatButton>{title}</FlatButton>
NavButton.propTypes = {
  title: PropTypes.string.isRequired,
}

export default NavButton