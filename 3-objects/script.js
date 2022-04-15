//3.1 Object.keys

const bus = {
    vehicle: 'Urbanway CNG 12',
    id: 3221,
    line: 'C6',
    paint: 'chrono',
    garage: {
        name: 'Sassenage',
        place: '47'
    },
    equipments: ['sae', 'tft', 'speech']
};

let key = Object.keys(bus)[1];
//console.log(key.value);
let value =Object.values(bus)[1];
console.log(key,value);

//3.2 Object.values

console.log(data);