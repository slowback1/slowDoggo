
import React, { Component } from 'react';
import DoggoService from './doggoService';

class AddDoggo extends Component {
    constructor(props) {
        super(props);
        this.state = {img: null};
        this.addDoggoService = new DoggoService();
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange = (event) => {
        const file = event.target.files[0]
        this.setState({img: file});
    }
    handleSubmit(event) {
        event.preventDefault();
        this.addDoggoService.sendData(this.state.value);
       // this.props.history.push('/');
    }
    
    render() {
        return (
            <form action="/upload" method="post" enctype="multipart/form-data" onSubmit={this.handleSubmit}>
                <input type="file" name="image" onChange={this.handleChange} />
                <input type="submit" name="submit" value="submit" />
            </form>
            )
    }
}


export default AddDoggo;