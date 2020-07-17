import React from 'react';
import { ListGroup } from 'react-bootstrap';
import Store from '../data/Store'
import {observer} from 'mobx-react'

@observer
export default class EmployeeList extends React.Component<{store: Store}> {
  render() {
    return <ListGroup>
              {this.props.store.employeesList.map((emp) =>
                  <ListGroup.Item>{emp}</ListGroup.Item>
              )}
            </ListGroup>
  }
}
