//4.1 Découverte

//const [a, b] = [1, 2, 3, 4];
//console.log(a);
//console.log(b);

const { first, last } = { first: 'Paul', last: 'Henta', age: 35 };
console.log(first);
console.log(last);

// on comprend que grâce à la destructuration, pour récupérer des valeurs d'un objet,
// il suffit de créer une var const avec pour param le nom de nos variables
// ensuite on aura des variables faites à la volée avec pour valeurs les valeurs de l'objet

const [a, b, c] = [1, 2, 3, 4];
console.log('3eme élément du tableau ', c);

const { age } = { first: 'Paul', last: 'Henta', age: 35 };
console.log('age', age);

//4.2 Application

console.log(data);

const { SEM_10427: blabla } = data;


console.log(blabla);

//console.log(SEM_10427.texte);

tabData = Object.keys(data);
console.log();
/*for(i=0;i<tabData.length;i++){
    console.log('for de tabData',tabData[i]);
    
}*/

for (let objUnit in data) {
    const { dateDebut, dateFin, texte } = data[objUnit];
    console.log('Date de début', dateDebut);
    console.log('Date de fin', dateFin);
    console.log(texte);
}

//section 3

const dataBis = {
    "SEM_10427": {
        "type": "restriction_ltc",
        "id": 108939,
        "texte": "C1 : Travaux en Centre-ville |L'itinéraire de la ligne est dévié en direction de Cité Jean Macé par la rue Lesdiguières et le boulevard Gambetta entre les arrêts Chavant et Docteur Mazet. L'arrêt Victor Hugo, en direction de Cité Jean Macé, n'est pas desservi. Vous pouvez vous reporter à l'arrêt Gambetta, situé boulevard Gambetta. L'arrêt Docteur Martin, en direction de Cité Jean Macé, est transféré rue Lesdiguières. ",
    },
    "SEM_10428": {
        "type": "restriction_ltc",
        "id": 108939,
        "texte": "C1 : Travaux en Centre-ville |L'itinéraire de la ligne est dévié en direction de Cité Jean Macé par la rue Lesdiguières et le boulevard Gambetta entre les arrêts Chavant et Docteur Mazet. L'arrêt Victor Hugo, en direction de Cité Jean Macé, n'est pas desservi. Vous pouvez vous reporter à l'arrêt Gambetta, situé boulevard Gambetta. L'arrêt Docteur Martin, en direction de Cité Jean Macé, est transféré rue Lesdiguières. ",
    }
}

let SEM_2020 = {
        "type": "typeFak",
        "id": "20202020",
        "texte": "mon faux texte"
}

//Je définis que type peut prendre une valeur par défaut

function addPerturbation(perturbationName, {type="typeDefaut", ...rest } ) {
    dataBis[perturbationName] = {
        type:type,
        ...rest
    };
}

addPerturbation("SEM_2020", SEM_2020);
console.log(dataBis);


//Section 4
function restTest(a,b,...rest) {
    console.log(a);
    console.log(b);
    console.log("rest=",rest);
}

restTest(1,4,3,6,8);