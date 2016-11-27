import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

import Location from './Location'
import iphoneImage from './images/iPhone_6.png';
import carouselImage from './images/photo-1440439307159-c3afc8a8e4ff.jpeg';

const getTeam = () => {
  return [
    {
      ID: 0,
      image:'./images/photo-1427104227401-94b390b378b0.jpeg'
    }, {
      ID: 1,
      image:'./images/photo-1433170854238-8828efbab416.jpeg'
    }, {
      ID: 2,
      image:'./images/photo-1449247526693-aa049327be54.jpeg'
    }, {
      ID: 3,
      image:'./images/photo-1455596120412-30a2e6c8e600.jpeg'
    }, {
      ID: 4,
      image:'./images/photo-1456534231849-7d5fcd82d77b.jpeg'
    }, {
      ID: 5,
      image:'./images/photo-1440439307159-c3afc8a8e4ff.jpeg'
    }
  ]
}

const getProjects = () => {
  return [
    'Project-image-1',
    'Project-image-2',
    'Project-image-3',
    'Project-image-4',
    'Project-image-5',
    'Project-image-6',
  ]
}

const styles = {
  container: {
    display: 'flex',
    backgroundColor:'white',
    flexDirection: 'column'
    // TODO
    // flexBasis? http://www.w3.org/TR/css3-flexbox/images/rel-vs-abs-flex.svg
  },
  
  productContainer: {
    display: 'flex',
    flexDirection: 'row',
    flexBasis: '100%'
  },
  productDescription: {
    flexOrder: 1,
    flexGrow: 1,
    alignItems: 'left',
  },
  downloadButton: {
    width: '254px',
    height: '69px',
    backgroundColor: '#EB6662',
    borderRadius: '40px',
    color: 'white',
    fontSize: '12px',
    fontWeight: 600,
    letterSpacing: '2px'
  },
  productImage: {
    flexGrow: 1,
    flexOrder: 2,
  },
  
  aboutContainer: {
    display: 'flex',
    flexDirection: 'row',
    flexBasis: '100%'
  },
  aboutUs: {
    order: 1,
    flexGrow: 1,
    flexBasis: 'auto'
  },
  map: {
    order: 2,
    flexGrow: 1,
    flexBasis: 'auto'
  },
  
  teamContainer: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'nowrap',
    flexBasis: '100%'
    // TODO    justifyContent: 'space-between'
  },
  teamMember: {
    flexGrow: 1,
    width: '300px',
    height: '300px',
    minWidth: '300px',
    minHeight: '300px',
  },
  
  workContainer: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    flexBasis: '100%',
  },
  project: {
    flexGrow: 1,
  },
  
  image: {
    maxWidth: '100%',
    maxHeight: '100%'
  }
}


const TeamMember = ({ID, image}, context) => {
  const staticPath = require(image)
  console.log(ID)
  return (<div style={styles.teamMember}>
    <img alt={staticPath} style={styles.image} src={staticPath} />
  </div>)
}

const Project = ({name}, context) => {
  return (<div>{name}</div>)
}



class App extends Component {
  render() {
    
    const work = getProjects().map((project) => <Project name={project}/>)
    
    const team = getTeam().map((member) => <TeamMember key={member.ID} image={member.image}/>)
    
    return (
      <div className="App" style={styles.container}>
        {/* <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
          </div>
          <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p> */}
        <header>
          <Toolbar style={{backgroundColor:'white'}}>
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
        </header>

        <section>
          <Card>
            <CardMedia>
              <img alt='carouselItem' src={carouselImage}/>
            </CardMedia>
          </Card>
        </section>

        <section>
          <div style={styles.productContainer}>
            <div style={styles.productDescription}>
              <h2>The Macho App</h2>
              <p>
                Nullam quis risus eget urna mollis ornare vel eu leo. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aenean lacinia bibendum nulla sed consectetur. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.

                Nullam quis risus eget urna mollis ornare vel eu leo. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aenean.
              </p>
              <FlatButton style={styles.downloadButton}>DOWNLOAD THE APP</FlatButton>
            </div>
            <div style={styles.productImage}>
              <img alt='iphone_6' src={iphoneImage} style={styles.image}/>
            </div>
          </div>
        </section>

        <section>
          <h2>Our Work</h2>
          <div style={styles.workContainer}>
            {work}
          </div>
        </section>

        <section>
          <h2>Our Team</h2>
          <div style={styles.teamContainer}>
            {team}
          </div>
        </section>

        <section style={styles.aboutContainer}>
          <div style={styles.aboutUs}>About US</div>
          <div style={styles.map}>
            <Location />
          </div>
        </section>

        <footer>Footer</footer>

      </div>
    );
  }
}

export default App;
