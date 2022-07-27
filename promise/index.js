const promise = new Promise(function(resolve, reject){
    resolve('Hey!');
})

const cows = 15;

const countCows = new Promise(function(resolve, reject){
    if (cows > 10){
        resolve(`We have ${cows} cows on the farm`);
    } else {
        reject(`There is not cows on the farm`);
    }
})

countCows.then((result) => {
    console.log(result);
}).catch((result) => {
    console.log(result);
}).finally(() => console.log('Finally'));