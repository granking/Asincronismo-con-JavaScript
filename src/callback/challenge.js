const XMLHttpRequest = require("xmlhttprequest");
const API = 'https://api.escuelajs.co/api/v1';

function fetchData(urlApi, callback){
    let xhttp = new XMLHttpRequest();

    xhttp.open('GET', urlApi, true);
    xhttp.onreadystatechange = function (event){
        if (xhttp.readyState === 4){
            if (xhttp.status === 200){
                callback(null, JSON.parse(xhttp.responseText));
                console.log('exitos')
            }
        } else {
            const error = new Error('Error'+ urlApi);
            return callback(error, null);
            console.log('error')
        }
    }
    xhttp.send();
}