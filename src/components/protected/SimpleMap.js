import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"
import React, { Component } from 'react'

const MyMapComponent = withScriptjs(withGoogleMap((props) =>
  <GoogleMap
    defaultZoom={8}
    defaultCenter={props.center}
  >
    {props.isMarkerShown && <Marker position={props.markerPositon} />}
  </GoogleMap>
))

export default class SimpleMap extends Component {
  static defaultProps = {
    center: {},
    zoom: 13,
    markerPositon: {}
  };

  render() {
    return (
      <MyMapComponent
        isMarkerShown
        center={this.props.center}
        markerPositon={this.props.markerPositon}
        googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyC4R6AN7SmujjPUIGKdyao2Kqitzr1kiRg&v=3.exp&libraries=geometry,drawing,places"
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={<div style={{ height: `400px` }} />}
        mapElement={<div style={{ height: `100%` }} />}
      />
    );
  }
}
