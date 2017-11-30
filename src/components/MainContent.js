import React, { Component } from 'react';
import { Carousel } from 'antd'
import mapmi1 from '../images/mapmi1.png';
import mapmi2 from '../images/mapmi2.png';
import mapmi3 from '../images/mapmi3.png';
class MainContent extends Component {

    constructor(props) {
        super(props)
        this.state = { accidents: [] }
        this._init_accidents()
    }

    _init_accidents() {
        this.state.accidents.push(
            {
                date: new Date(),
                details: 'Eschborn Accident1',
                severity: 'Noboday Injured'
            }
        )
        this.state.accidents.push(
            {
                date: new Date(),
                details: 'Haupwach Accident1',
                severity: 'Somebody Injured'
            }
        )
    }

    render() {
        return (
            <div className="maincontent">
                <Carousel autoplay>
                    <div> <img src={mapmi1} alt="MapMi Accident Ticket" /> </div>
                    <div> <img src={mapmi2} alt="MapMi Accident Ticket" /> </div>
                    <div> <img src={mapmi3} alt="MapMi Accident Ticket" /> </div>
                </Carousel>
                <ul>
                    {this.state.accidents.map((accident, i) => {
                        new Date().getDate
                        return <li key={i}> {
                            accident.details + " " + accident.date.getFullYear() + '-' +
                            accident.date.getMonth() + '-' + accident.date.getDate()}
                        </li>
                    })}
                </ul>
            </div>
        );
    }
}
export default MainContent;