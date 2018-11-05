import React, { Component } from 'react';
import heartIcon from './heart-icon.png';
import ReactDOM from 'react-dom';
import mapboxgl from 'mapbox-gl';
import TextArea from 'components/TextArea';

const Info = () => {
  return (
    <div>
      <h1>Venue and Wedding Info</h1>
      <div className='map-layout'>
        <div className='map-info'>
          <h2>Location</h2>
          <p>Neyborly - Poet's Corner:</p>
          <p>2043 San Pablo Ave, Berkeley, CA 94702</p>
        </div>
        <div className='map-container'>
          <Map />
        </div>
      </div>
      <div>
        <h3>Attire:</h3>
        <p>Come as you are! We hope to see everything from prom dresses to costumes, to onsies. Nothing is off limits, and creativity is encouraged!</p>
      </div>
      <div>
        <h4>What you can expect:</h4>
        <p>You will get to witness the wedding ceremony between Emily Morgado and Alexei Samimi.
        That will be followed by a party which will include food, drink, dessert, music, dancing, activities, and more.
        Due to the number of guests coming, there will not be a sit down dinner.</p>
      </div>
    </div>
  )
}
export default Info;


mapboxgl.accessToken = 'pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4M29iazA2Z2gycXA4N2pmbDZmangifQ.-g_vE53SD2WrJ6tFX7QHmA';

class Map extends React.Component {
  constructor(props: Props) {
    super(props);
    this.state = {
      lat: 37.8685304,
      lng: -122.2915829,
      zoom: 15
    };
  }

  componentDidMount() {
    const { lng, lat, zoom } = this.state;
    const map = new mapboxgl.Map({
      container: this.mapContainer,
      style: 'mapbox://styles/mapbox/streets-v9',
      center: [lng, lat],
      zoom
    });

    map.on("load", function () {
      map.loadImage(heartIcon, function(error, image) {
          if (error) throw error;
          map.addImage("custom-marker", image);
          map.addLayer({
            id: "markers",
            type: "symbol",
            source: {
              type: "geojson",
              data: {
                type: "FeatureCollection",
                features:[{"type":"Feature","geometry":{"type":"Point","coordinates":["-122.2915829","37.8685304"]}}]}
            },
            layout: {
              "icon-image": "custom-marker",
            }
          });
        });
    });


    map.on('move', () => {
      const { lng, lat } = map.getCenter();

      this.setState({
        lng: lng.toFixed(4),
        lat: lat.toFixed(4),
        zoom: map.getZoom().toFixed(2)
      });
    });
  }

  render() {
    const { lng, lat, zoom } = this.state;

    return (
      <div>
        <div>
          <div>{`Longitude: ${lng} Latitude: ${lat} Zoom: ${zoom}`}</div>
        </div>
        <div ref={el => this.mapContainer = el}/>
      </div>
    );
  }
}
ReactDOM.render(<Map />, document.getElementById('root'));
// // And other info:
// // https://apracticalwedding.com/children-not-invited-to-wedding/
// // <Container>
// //   Per the guest limit at our venue, we will we not be able to have children attend.
// //   However, if you are traveling with you children to our wedding,
// //   we have coordinated with our hotel and a licensed local nanny service to provide childcare during the event.
// //   Please indicate on your RSVP card if you will be needing childcare.
// //   Also, we joyously welcome your children to our post-wedding brunch the following morning.
// //   Don’t hesitate to let us know how we further help!
// // </Container>