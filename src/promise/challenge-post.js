import fetch from 'node-fetch';
const API = 'https://api.escuelajs.co/api/v1';

function postData(urlApi, data) {
    return fetch(urlApi, {
        method: 'POST',
        mode: 'cors',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });
}

const data = {
    "title": "My image2.0",
    "price": 100,
    "description": "Doctor Strange in the Multiverse of Madness",
    "categoryId": 1,
    "images": ["https://www.themoviedb.org/t/p/original/51wwXoVKpS6oJMbz03qvN0Hxt99.jpg"]
}

postData(`${API}/products`, data)
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(err => console.log(err));