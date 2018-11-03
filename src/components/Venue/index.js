// COMBINE WITH WEDDING INFO

import React, { Component } from 'react';
// import mapboxgl from 'mapbox-gl';
// import GoogleMapReact from 'google-map-react';

import Navbar from 'components/Navbar';
// import './index.css';

class Venue extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <h1>The Venue and other Details</h1>
      </div>
    )
  }
}

export default Venue;

//
// mapboxgl.accessToken = 'pk.eyJ1IjoidGFtYW5kdWEiLCJhIjoiY2lnNGkyM24yMnNmYnYzbTN6bG5paGY2ZiJ9.lCx9N4fOI0MKfLbjm8_lyQ';
//
// class Map extends React.Component {
//   componentDidMount() {
//     this.map = new mapboxgl.Map({
//       container: this.mapContainer,
//       style: 'mapbox://styles/mapbox/streets-v9'
//     });
//   }
//
//   componentWillUnmount() {
//     this.map.remove();
//   }
//
//   render() {
//     const style = {
//       position: 'absolute',
//       top: 0,
//       bottom: 0,
//       width: '100%'
//     };
//
//     const newElement = document.createElement('div');
//
//     return
//     <div id="non-portal">
//     {
//       ReactDOM.createPortal(
//         this.props.children,
//         this.nodeElement.appendChild(newElement)
//       )
//     }
//     </div>
//     {/* <div style={style} ref={el => this.mapContainer = el} />; */}
//   }
// }
//
// // ReactDOM.render(<Map />, document.getElementById('root'));
//
// // class PortalExample extends React.Component {
// //   constructor (props) {
// //     super(props);
// //
// //     this.nodeElement = document.getElementById('portal');
// //   }
// //
// //   render () {
// //     const newElement = document.createElement('span');
// //     newElement.innerText = 'portal element';
// //
// //     return (
// //       <div id="non-portal">
// // 	{
// // 	  ReactDOM.createPortal(
// // 	    this.props.children,
// // 	    this.nodeElement.appendChild(newElement)
// // 	  )
// // 	}
// //       </div>
// //     )
// //   }
// // }
// //
// // export default PortalExample;
//
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
