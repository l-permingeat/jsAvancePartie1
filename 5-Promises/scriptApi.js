async function caracteristiqueEspece() {
    try {
        //await permet de dire au reste du code d'attendre avant de s'executer 
        const reponseJS = await fetch("https://swapi.dev/api/species/1")
        // transfrome le json en objet javascript
        const resultJson = await reponseJS.json()
        console.log('objet en JS : ', resultJson)
        let espece = resultJson
        return espece;
    }
    catch (error) {
        console.log("erreur : ", error);
    }
}

caracteristiqueEspece()
    //fonction, qui va chaîner l'appel à la fonction caracteristiqueEspece pour récupérer les caractéristique du premier personnage du tableau people.
    .then((espece) => {
        console.log("people", espece.people[0]);
    })


// ********** Section 3 **********

cliquer()
// .then((resolve) => console.log(resolve))
// .catch(reject => console.log(reject))

function cliquer() {
    let ok = document.querySelector('#ok');
    let cancel = document.querySelector('#cancel');
    //return new Promise((resolve, reject) => {
    ok.addEventListener("click", function (event) {
        let eventOk = event.ok;
        promesse(eventOk)
        /* if (event.ok) {
             resolve("Ok clicked")
         }*/
    })
    cancel.addEventListener("click", function (event) {
        let eventCancel = event.cancel;
        promesse(eventCancel);
        /*if (event.cancel) {
            reject("Cancel clicked")
        }*/
    })
    //})
}


function promesse(event) {
    return new Promise((resolve, reject) => {
        if (event === "eventOk") {
            resolve("Ok clicked");
        } else if (event === "eventCancel") {
            reject("Cancel clicked")
        }
    })
}

//BONNE METHODE

surveillerClickBouton(document.querySelector('#ok'))
    .then(() => console.log("Ok clicked"))

surveillerClickBouton(document.querySelector('#cancel'))
    .then(() => console.log("Cancel clicked"))

function surveillerClickBouton(element) {
    return new Promise((resolve, reject) => {
        element.addEventListener("click", function (event) {
            resolve()
        })
    })
}


// Autre alternative bonne methode 
/*
document.addEventListener("click", function (event) {
    button = event.target.id;
    cliquerBis(button)
        .then(resolve => console.log(resolve))
        .catch(reject => console.log(reject))
})

function cliquerBis(button) {
    return new Promise((resolve, reject) => {
        if (button === "ok") {
            resolve("Ok clicked")
        } else if (button === "cancel") {
            reject("Cancel clicked")
        }
    })
}

*/














async function allName() {
    try {
        //await permet de dire au reste du code d'attendre avant de s'executer 
        const reponseJS = await fetch("https://swapi.dev/api/species/")
        // transfrome le json en objet javascript
        const resultJson = await reponseJS.json()
        console.log("tab", resultJson.results.name);
        let tabName = resultJson.results;
    }
    catch (error) {
        console.log("erreur : ", error);
    }
}