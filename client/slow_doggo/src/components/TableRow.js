import React, { Component } from 'react';

class TableRow extends Component {
    render() {
        return (
                <tr>
                    <td> {this.props.obj._id} </td>
                    <td> {this.props.obj.item}</td>
                </tr>
            )
    }
}

export default TableRow;