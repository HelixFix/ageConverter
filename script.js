// Écrivez ici votre script

console.log(inputSecondes);
console.log(button);


let messageDoyen = "Que je sache la personne la plus âgée ayant existé a ce jour avait 121 ans";
let messageBirth = "Hello World"
let messageEgg= "Qu'est-ce qui est apparu en premier : l'œuf ou la poule ?"


ageEntrer = document.getElementById('age').value;





document.getElementById("button").addEventListener("click", function (e) {
    e.preventDefault();

    

    

    //Secondes
    if (document.getElementById('inputSecondes').checked){
        if (ageEntrer < 122 && ageEntrer > 0 ){

            function numberWithSpaces(seconds) {
                var seconds = ageEntrer * 60 * 60 * 24 * 365;
                spaceNum = x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
                let age = document.getElementById("result").innerHTML = spaceNum;
                console.log(age);
                
            }
            console.log(ageEntrer);
            

            
        }

        if (ageEntrer == 0 ){
            let age = document.getElementById("result").innerHTML = messageBirth
        }
        if (ageEntrer > 121) {
            let age = document.getElementById("result").innerHTML = messageDoyen
        }

        if (ageEntrer < 0 ) {
            let age = document.getElementById("result").innerHTML = messageEgg
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