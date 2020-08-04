import React, { Component } from 'react';

class DataRow extends Component {
    render() {
        return (
            <tr>
                <td>{this.props.index + 1}</td>
                <td>{this.props.data.CODE}</td>
                <td>{this.props.data.NAME}</td>
                <td>{this.props.data.MAIN}</td>
                <td>
                    <div className="btn-group">
                        <div className="btn btn-warning" onClick={(dt) => this.props.changeEditMode(this.props.data)}> <i className="fa fa-edit" /></div>
                        <div className="btn btn-danger" onClick={(code) => this.props.deleteItem(this.props.data.CODE)}><i className="fa fa-recycle" /></div>
                    </div>
                </td>
            </tr>
        );
    }
}

export default DataRow;