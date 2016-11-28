import React, { Component } from 'react';
import './App.css';
import Location from './Location';
import About from './About';
import Footer from './Footer';
import Header from './Header';
import Works from './Works';
import Team from './Team';
import Product from './Product';
import Carousel from './Carousel';

import carouselImage from './images/photo-1440439307159-c3afc8a8e4ff.jpeg';
import iphoneImage from './images/iPhone_6.png';

const productText = `Nullam quis risus eget urna mollis ornare vel eu leo. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aenean lacinia bibendum nulla sed consectetur. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.

Nullam quis risus eget urna mollis ornare vel eu leo. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aenean.`

const productTitle = 'The Macho App'

const logo = 'MACHO'

const getTeam = () => {
  return [{
      ID: 0,
      image: './images/sozGYg0tQdSmsUkoPhvt_12.jpg'
    }, {
      ID: 1,
      image:'./images/photo-1427104227401-94b390b378b0.jpeg'
    }, {
      ID: 2,
      image:'./images/photo-1433170854238-8828efbab416.jpeg'
    }, {
      ID: 3,
      image:'./images/photo-1449247526693-aa049327be54.jpeg'
    }, {
      ID: 4,
      image:'./images/photo-1455596120412-30a2e6c8e600.jpeg'
    }, {
      ID: 5,
      image:'./images/photo-1456534231849-7d5fcd82d77b.jpeg'
  }]
}

const getWorks = () => {
  return [{
      ID: 0,
      image: './images/work1.jpg'
    }, {
      ID: 1,
      image: './images/work2.jpg'
    }, {
      ID: 2,
      image: './images/work3.jpg'
    }, {
      ID: 3,
      image: './images/work4.jpg'
    }, {
      ID: 4,
      image: './images/work5.jpg'
    }, {
      ID: 5,
      image: './images/work6.jpg'
  }]
}

const styles = {
  container: {
    display: 'flex',
    backgroundColor:'white',
    flexDirection: 'column'
    // TODO
    // flexBasis? http://www.w3.org/TR/css3-flexbox/images/rel-vs-abs-flex.svg
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

  image: {
    maxWidth: '100%',
    maxHeight: '100%'
  }
}

class App extends Component {
  render() {
    return (
      <div className="App" style={styles.container}>
        <header>
          <Header />
        </header>

        <section>
          <Carousel image={carouselImage} />
        </section>

        <section>
          <Product title={productTitle} image={iphoneImage} text={productText}/>
        </section>

        <section>
          <Works works={getWorks()}/>
        </section>

        <section>
          <Team members={getTeam()}/>
        </section>

        <section style={styles.aboutContainer}>
          <div style={styles.aboutUs}>
            <About />
          </div>
          <div style={styles.map}>
            <Location />
          </div>
        </section>

        <footer>
          <Footer logo={logo}/>
        </footer>

      </div>
    );
  }
}

export default App;
