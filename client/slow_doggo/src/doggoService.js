import fetch from 'node-fetch';

class DoggoService {
    sendData(data) {
        fetch('http://localhost:8080/items/add/post', { method: 'POST', body: {item: data}})
        .then(function(res) {
            console.log(res);
        })
        .catch(function(err) {
            console.log(err);
        });
    }
}

export default DoggoService;