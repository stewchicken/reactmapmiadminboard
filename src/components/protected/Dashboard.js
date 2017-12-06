import React, { Component } from 'react'
import { app } from '../../config/constants'
import { Table, Icon } from 'antd';

const { Column, ColumnGroup } = Table;

export default class Dashboard extends Component {

  constructor(props) {
    super(props);
    this.state = { accidents: [] };
    this.grabAccidents = this.grabAccidents.bind(this);
  }

  componentDidMount() {
    this.grabAccidents();
  }

  grabAccidents() {

    let that = this;
    const accidentsRef = app.database().ref().child('accidentitems').orderByKey();

    accidentsRef.once('value', snapshot => {
      let accidentsarray = []
      snapshot.forEach(childSnapshot => {
        let item = childSnapshot.val();
        item.key = childSnapshot.key;
        accidentsarray.push(item);
      });
      that.setState({ accidents: accidentsarray })
      console.log(this.state.accidents)
    });
  }

  render() {
    return (
      <div>
        Dashboard of  accident tickets
         <Table dataSource={this.state.accidents}>
          <Column
            title="Status"
            dataIndex="status"
            key="status"
          />
          <Column
            title="category"
            dataIndex="category"
            key="category"
          />
          <Column
            title="Date"
            dataIndex="date"
            key="date"
          />
          <Column
            title="Details"
            dataIndex="details"
            key="details"
          />
          <Column
            title="HandyNumber"
            dataIndex="handynumber"
            key="handynumber"
          />
          <ColumnGroup title="GPS">
            <Column
              title="lat"
              dataIndex="lat"
              key="lat"
            />
            <Column
              title="lng"
              dataIndex="lng"
              key="lng"
            />
          </ColumnGroup>
          <Column
            title="Action"
            key="action"
            render={(text, record) => (
              <span>
                <span className="ant-divider" />
                <a href="#">Delete</a>
                <span className="ant-divider" />
                <a href={'editaccident/' + record.key}>
                  Edit
                </a>
              </span>
            )}
          />
        </Table>
      </div>
    )
  }
}