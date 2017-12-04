import React, { Component } from 'react'
import { app, ref, base } from '../../config/constants'
import { Card, Icon } from 'antd'


// var rootRef = app.database().ref();
// const rootRef = app.database().ref();

export default class EditAccident extends Component {

    constructor(props) {
        super(props);
        console.log(props.match.params.key)
        this.state = { accident: {}, key: '', changestatus: 'NONE', changeseverity: 'NONE' };

        if (props.match.params.key) {
            this.state.key = props.match.params.key;
        }
        this.grabAccident = this.grabAccident.bind(this);
    }

    componentDidMount() {
        this.grabAccident(this.state.key);
    }

    handleStatusChange(event) {
        console.log("Status " + event.target.value)
        this.setState({
            changestatus: event.target.value
        })
    }

    handleSeverityChange(event) {
        console.log("Severity " + event.target.value)
        this.setState({
            changeseverity: event.target.value
        })
    }

    handleSubmit(event) {
        if (this.state.changestatus == 'NONE') {
            event.preventDefault();
            alert("Please change status or serverity before submit! ")
        } else {
            var that = this //for fat arrow function you dont need to do this 
            console.log("this.state.changestatus ### " + this.state.changestatus)

            console.log("this.state.key " + this.state.key)
            console.log("this.state.accident " + this.state.accident)
            console.log("this.state.accident.key " + this.state.accident.key)
            //const rootRef = app.database().ref();
            var accident = {}
            accident.category = this.state.accident.category
            accident.date = this.state.accident.date
            accident.details = this.state.accident.details
            accident.handynumber = this.state.accident.handynumber
            accident.lat = this.state.accident.lat
            accident.lng = this.state.accident.lng
            accident.imagename = this.state.accident.imagename
            accident.status = this.state.changestatus
            const accidentsRef = app.database().ref('accidentitems').child(this.state.key).update(accident)
                .then(() => ref.once('value'))
                .then(snapshot => snapshot.val())
                .catch(error => ({
                    errorCode: error.code,
                    errorMessage: error.message
                }));
        }
    }
    grabAccident(key) {
        var that = this;
        var accident = {}
        const rootRef = app.database().ref();
        const accidentsRef = rootRef.child('accidentitems').child(key);
        accidentsRef.once('value', snapshot => {
            accident.key = snapshot.key
            var item = snapshot.val()
            accident.key = snapshot.key
            accident.category = item.category
            accident.date = item.date
            accident.details = item.details
            accident.handynumber = item.handynumber
            accident.lat = item.lat
            accident.lng = item.lng
            accident.imagename = item.imagename
            accident.status = item.status
            app.storage().ref().child('accidents/' + item.imagename + '.jpg').getDownloadURL().then((url) => {
                accident.imageurl = url
                that.setState({ accident: accident })
                console.log("imageurl### " + this.state.accident.imageurl)
            })
        });
    }

    render() {
        return (
            <div>
                <h3>
                    Edit Accident Ticket
                </h3>

                <Card style={{ width: 340 }} bodyStyle={{ padding: 0 }}>
                    <div className="custom-image">
                        <Icon type="camera" style={{ fontSize: 22, color: '#08c' }} />
                        <img alt="accientimage" width="340px" src={this.state.accident.imageurl} />
                    </div>
                    <div className="custom-card">
                        <Icon type="clock-circle-o" style={{ fontSize: 22, color: '#08c' }} />
                        <p>Date/Time: {this.state.accident.date}</p>
                    </div>
                    <div className="custom-card">
                        <Icon type="edit" style={{ fontSize: 22, color: '#08c' }} />
                        <p>Severity: {this.state.accident.category}</p>
                    </div>
                    <div className="custom-card">
                        <Icon type="copy" style={{ fontSize: 22, color: '#08c' }} />
                        <p>Details: {this.state.accident.details}</p>
                    </div>
                    <div className="custom-card">
                        <Icon type="global" style={{ fontSize: 22, color: '#08c' }} />
                        <p>GPS(lat/lng): {this.state.accident.lat + ' / ' + this.state.accident.lng}</p>
                    </div>
                    <div className="custom-card">
                        <Icon type="mobile" style={{ fontSize: 22, color: '#08c' }} />
                        <p>Mobile: {this.state.accident.handynumber}</p>
                    </div>
                    <div className="custom-card">
                        <Icon type="exception" style={{ fontSize: 22, color: '#08c' }} />
                        <p>Status: {this.state.accident.status}</p>
                    </div>
                </Card>
                <form onSubmit={this.handleSubmit.bind(this)}>
                    <label>
                        <select value={this.state.changestatus} onChange={this.handleStatusChange.bind(this)}>
                            <option value="NONE">Change Status  </option>
                            <option value="NEW">NEW</option>
                            <option value="INPROCESS">InProcess</option>
                            <option value="CLOSE">Close</option>
                        </select>
                    </label>
                    <input type="submit" value="Submit" />
                </form>
            </div>
        )
    }
}