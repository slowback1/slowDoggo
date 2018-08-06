import fetch from 'node-fetch';

class DoggoService {
    sendData(data) {
        fetch('http://slow-doggo-slowback1.c9users.io:8082/doggo', { 
        method: 'POST',
        headers: { 'Access-Control-Allow-Origin': '*' },
        body: {item: data}
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