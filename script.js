// Écrivez ici votre script

console.log(inputSecondes);
console.log(button);


let messageError = "Que je sache l'âge de la personne la plus âgée ayant existé a ce jour avait 121 ans";



document.getElementById("button").addEventListener("click", function (e) {
    e.preventDefault();

    ageEntrer = document.getElementById('age').value;

    //Secondes
    if (document.getElementById('inputSecondes').checked){
        if (ageEntrer < 122 ){
            let age = document.getElementById("result").innerHTML = ageEntrer * 60 * 60 * 24 * 365;
        }
        else {
            let age = document.getElementById("result").innerHTML = messageError
        }
    }


    //Minutes
    if (document.getElementById('inputMinutes').checked) {
        
        let age = document.getElementById("result").innerHTML = ageEntrer * 60 * 24 * 365;
    }

    //heures
    if (document.getElementById('inputHeures').checked) {
        
        let age = document.getElementById("result").innerHTML = ageEntrer * 24 * 365;
    }

    //jours
    if (document.getElementById('inputJours').checked) {
        
        let age = document.getElementById("result").innerHTML = ageEntrer * 365;
    }

});