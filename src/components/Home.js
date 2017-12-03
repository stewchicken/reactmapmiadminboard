import React, { Component } from 'react'
import { Carousel } from 'antd'
import mapmi1 from '../images/mapmi1.png';
import mapmi2 from '../images/mapmi2.png';
import mapmi3 from '../images/mapmi3.png';

export default class Home extends Component {
  render() {
    return (
      <div>
        <Carousel autoplay>
          <div> <img src={mapmi1} alt="MapMi Accident Ticket" /> </div>
          <div> <img src={mapmi2} alt="MapMi Accident Ticket" /> </div>
          <div> <img src={mapmi3} alt="MapMi Accident Ticket" /> </div>
        </Carousel>
      </div>
    )
  }
}