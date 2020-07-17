import React from "react";
import Store from '../data/Store'
import {observer} from 'mobx-react'

@observer
export default class SelectSiteIdFilter extends React.Component<{store: Store}> {
    public render() {
        return <div>
                    <select className="form-control" id="sel1" onChange={this.props.store.handleSelectEmployeeChange.bind(this.props.store)}>
                        {this.props.store.employeesList.map((emp) => (
                            <option key={emp} value={emp}>{emp}</option>
                        ))}
                    </select>
                </div>
    }
}