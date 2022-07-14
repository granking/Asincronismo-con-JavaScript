function sum(num1, num2){
    return num1 + num2;
}

function calc(num1, num2, callback){
    return callback(num1, num2);
}

console.log(calc(2, 6, sum));

setTimeout(function () {
    console.log('Hello! Javascript');
}, 2000)

function greeting (name){
    console.log(`Hello! ${name}`);
}

// esta funcion setTimeout recive estos parametros (function, wait time, arguments)
setTimeout(greeting, 2000, 'Elkin');