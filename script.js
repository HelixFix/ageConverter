// Écrivez ici votre script

console.log(inputSecondes);
console.log(button);


ageEntrer = document.getElementById('age').value;

document.getElementById("button").addEventListener("click", function (e) {
    e.preventDefault();

    //Secondes
    if (document.getElementById('inputSecondes').checked){
        
        let age = document.getElementById("result").innerHTML = ageEntrer * 60 * 60 * 24 * 365;
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