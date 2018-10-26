import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Container } from 'semantic-ui-react';
import mapboxgl from 'mapbox-gl';
// import GoogleMapReact from 'google-map-react';

import Navbar from 'components/Navbar';
// import './index.css';

class Venue extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <h1>The Venue and other Details</h1>
        <Container>
          <Map />
        </Container>
      </div>
    )
  }
}

export default Venue;


mapboxgl.accessToken = 'pk.eyJ1IjoidGFtYW5kdWEiLCJhIjoiY2lnNGkyM24yMnNmYnYzbTN6bG5paGY2ZiJ9.lCx9N4fOI0MKfLbjm8_lyQ';

class Map extends React.Component {
  componentDidMount() {
    this.map = new mapboxgl.Map({
      container: this.mapContainer,
      style: 'mapbox://styles/mapbox/streets-v9'
    });
  }

  componentWillUnmount() {
    this.map.remove();
  }

  render() {
    const style = {
      position: 'absolute',
      top: 0,
      bottom: 0,
      width: '100%'
    };

    return <div style={style} ref={el => this.mapContainer = el} />;
  }
}

ReactDOM.render(<Map />, document.getElementById('root'));
// ReactDOM.createElement(<Map />, document.getElementById('app'));
