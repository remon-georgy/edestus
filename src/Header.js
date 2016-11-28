import React from 'react';
import {Toolbar, ToolbarGroup} from 'material-ui/Toolbar';
import FlatButton from 'material-ui/FlatButton';

const styles = {
  toolbar: {
    backgroundColor:'white'
  }
}

const Header = () => {
  return (
    <Toolbar style={styles.toolbar}>
      <ToolbarGroup>
        MACHO
      </ToolbarGroup>
      <ToolbarGroup>
        <FlatButton style={{borderColor: 'red', borderStyle:'solid'}}>PRODUCT</FlatButton>
        <FlatButton>WORK</FlatButton>
        <FlatButton>TEAM</FlatButton>
        <FlatButton>ABOUT</FlatButton>
        <FlatButton>CONTACT</FlatButton>
      </ToolbarGroup>
    </Toolbar>
  )
}

export default Header