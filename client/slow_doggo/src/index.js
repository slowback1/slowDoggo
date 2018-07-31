import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import App from './App';
import AddDoggo from './addDoggo';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <div>
    <h1>placeholder</h1>
    <Router>
    <div>
        <Route exact path='/' component={App} />
        <Route path='/add-doggo' component={AddDoggo} />
    </div>
    </Router>
</div>

, document.getElementById('root'));
registerServiceWorker();
