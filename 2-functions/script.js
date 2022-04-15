//2.1 Fonctions simples
/*const sayHello = function() {
    console.log('Hello')
};*/

//fonction fléchée sans paramètre
const sayHello = () => {
    console.log('Hello')
};

/*const sayMyName = function(first, last) {
    console.log(first, last)
};*/

//fonction fléchée avec plusieurs params
const sayMyName = (first, last) => console.log(first, last);

/*const sayMyAge = function(age) {
    console.log('You are ' + age + ' years old')
};*/

//fonction fléchée avec 1 param
const sayMyAge = age => console.log('You are ' + age + ' years old');

sayHello();
sayMyName('Odile', 'Crok');
sayMyAge(23);

//----------------------//
//2.2 this

/*const object = {
    color: 'red',
    shape: 'circle',
    threeDimensions: false,
    showThis: function () {
        console.log(this)
    }
};*/

const object = {
    color: 'red',
    shape: 'circle',
    threeDimensions: false,
    showThis:() => console.log(this)
};

//Je remarque qu'une fonction fléchée avec un this dans un objet
//retourne le scope superieur et pas celui de l'objet

object.showThis();

//----------------------//
//2.3 Application

const odile = {
    name: {
        first: 'Odile',
        last: 'Crok'
    },
    age: 23,
    sayHello: ()=>{console.log('Son prénom est',odile.name.first)},
    sayMyName:()=>console.log('Son nom de famille est',odile.name.last),
    sayMyAge:()=>console.log('Son âge est', odile.age),
};

odile.sayHello()
odile.sayMyName()
odile.sayMyAge()