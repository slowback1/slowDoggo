import React, { Component } from 'react';
import DoggoService from '../doggoService';
import fetch from 'node-fetch';
import TableRow from '/tableRow';

class IndexItem extends Component {
    constructor(props) {
        super(props);
        this.state = {value: '', items: ''};
        this.addDoggoService = new DoggoService();
    }
    componentDidMount() {
        fetch('http://localhost:8082/items').then(response => {
            this.setState({ items: response.data });
        }).catch(function (err) {
            console.log(error);
        });
    }
    tabRow() { 
        if(this.state.items instanceof Array) {
            return this.state.items.map(function(object, i) {
                return <TableRow obj={object} key={i} />;
            });
        }   
    }
    render() {
        return (
                <div className="container">
                    <table>
                        <thead>
                            <tr>
                                <td> No. </td>
                                <td> Item </td>
                            </tr>  
                        </thead>
                        <tbody>
                            {this.tabRow()}
                        </tbody>
                    </table>
                </div> 
            );
    }
}

export default IndexItem;