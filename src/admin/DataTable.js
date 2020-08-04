import React, { Component } from 'react';
import DataRow from './DataRow';

class DataTable extends Component {

    mappingData = () => {
        return (
            this.props.data.map((value, key) => (
                <DataRow key={key} index={key} data={value} changeEditMode={(dt) => this.props.changeEditMode(dt)} deleteItem = {(code) => this.props.deleteItem(code)}></DataRow>
            )))
    }
    render() {
        return (
            <table className="table table-striped table-inverse table-hover">
                <thead className="thead-inverse">
                    <tr>
                        <th>Num</th>
                        <th>Code</th>
                        <th>Name</th>
                        <th>Main</th>
                        <th />
                    </tr>
                </thead>
                <tbody>
                    {this.mappingData()}
                </tbody>
            </table>
        );
    }
}

export default DataTable;