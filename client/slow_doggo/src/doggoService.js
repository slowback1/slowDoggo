import fetch from 'node-fetch';

class DoggoService {
    sendData(data) {
        fetch('http://localhost:8082', { 
        method: 'POST',
        body: {item: data},
        method: 'cors',
        headers: { 'Acess-Control-Allow-Origin': '*' }
        })
        .then(function(res) {
            console.log(res);
        })
        .catch(function(err) {
            console.log(err);
        });
    }
}

export default DoggoService;