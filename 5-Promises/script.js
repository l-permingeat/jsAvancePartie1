// Fonction utilisées par les fonctions de l'exercice - Ne pas modifier ou appeler directement
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

// Note : les fonctions ci-dessous sont prêtes à l'emploi, vous n'avez pas à les modifier, juste à les appeler.
// Elles retournent toutes des promesses et peuvent donc être chaînées via la fonction "then".
function first() {
  return sleep(300).then(() => { console.log('message 1'); });
}

function second() {
  return sleep(100).then(() => { console.log('message 2'); });
}

function third() {
  return sleep(200).then(() => { console.log('message 3'); });
}

function secondWithError() {
  return sleep(100).then(() => { throw new Error("catch me if you can"); })
}

//first();
//second();
//third();

//Section 1 
//Petit 2 - Utiliser les promises afin que les messages s'enchaînent dans le bon ordre (1, 2, 3).
console.log("*********** Petit 2 ***********");
console.log("J'affiche les messages dans le bon ordre :");
sleep()
  .then(() => {
    return first();
  })
  .then(() => {
    return second();
  })
  .then(() => {
    return third();
  }).then(() => {
    console.log("*********** Petit 3 ***********");
  })
  .then(() => {
    return first();
  })
  /*.then(() => {
    return secondWithError();
  })*/
  .then(() => {
    return third();
  })
  .then(() => {
    console.log("*********** Petit 4 et Petit 5***********");
    console.log("Modifier le code afin de ne pas briser la chaîne des appels malgré tout :");
  })
  .then(() => {
    return first();
  })
  .then(() => {
    return secondWithError();
  })
  .catch((error) => {
    console.error(error.message);
  })
  .then(() => {
    return third();
  })
  .then(() => {
    console.log("***********  ***********");
    console.log("Modifier le code afin d'afficher le message d'erreur entre les messages 1 et 3 :");
  })
  .then(() => {
    return first();
  })
  //.catch(secondWithError())
  .then(() => {
    return third();
  });


// Section 2



//let fetch = require("node-fetch");

appelApi()


async function appelApi() {
  try {
    //await permet de dire au reste du code d'attendre avant de s'executer 
    const reponseJS = await fetch("https://swapi.dev/api/people/");
    // transfrome le json en objet javascript
    const resultJson = await reponseJS.json();
    console.log('objet en JS : ', resultJson);
    console.log("Caractéristique de l'espèce", resultJson.results[0]);
    return reponseJS;
  }
  catch (error) {
    console.log("erreur : ", error);
  }
}


async function appelApiBis() {
  try {
    //await permet de dire au reste du code d'attendre avant de s'executer 
    const reponseJS = await fetch("https://swapi.dev/api/people/")
    // transfrome le json en objet javascript
    const resultJson = await reponseJS.json()
    let i = 0;
    while (i < resultJson.length) {
      let tabEspece = [];
      tabEspece[i] = resultJson.results[i];
      i++;
    }
    console.log(tabEspece)
    return reponseJS;
  }
  catch (error) {
    console.log("erreur : ", error);
  }
}

