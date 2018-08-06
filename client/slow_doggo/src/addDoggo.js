
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
        this.setState({img: URL.createObjectURL(event.target.files[0])});
    }
    handleSubmit(event) {
        event.preventDefault();
        this.addDoggoService.sendData(this.state.value);
        this.props.history.push('/');
    }
    
    render() {
        return (
            <div>
            <form action="/upload" method="post" enctype="multipart/form-data" onSubmit={this.handleSubmit}>
                <input type="file" name="image" onChange={this.handleChange} />
                <input type="submit" name="submit" value="submit" />
            </form>
            <img src={this.state.img} alt="image will appear here" style={{width: '400px', height: '400px'}}/>
            </div>
            )
    }
}


export default AddDoggo;