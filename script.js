// Écrivez ici votre script

console.log(inputSecondes);
console.log(button);


const messageDoyen = "Que je sache la personne la plus âgée ayant existé a ce jour avait 121 ans";
const messageBirth = "Hello World"
const messageEgg = "Qu'est-ce qui est apparu en premier : l'œuf ou la poule ?"


document.getElementById("button").addEventListener("click", function (e) {
    e.preventDefault();


    ageEntrer = document.getElementById('age').value;

    let curDate = new Date();

    let curYear = curDate.getFullYear();
    let range = curYear - ageEntrer;


    console.log(curYear);
    console.log(range);


    // calcul année bissextile

    function leap_year_range(st_year, end_year) {
        var year_range = [];
        for (var i = st_year; i <= end_year; i++) {
            year_range.push(i);
        }
        var new_array = [];

        year_range.forEach(
            function (year) {
                if (test_LeapYear(year))
                    new_array.push(year);
            });

        return "Félicitation vous avez survécu à " + new_array.length + " année(s) bissextile";
        
    }

    function test_LeapYear(year) {
        if ((year % 4 === 0 && year % 100 !== 0) || (year % 100 === 0 && year % 400 === 0)) {
            return year;
        } else {
            return false;
        }
    }

    console.log(leap_year_range(range,curYear));
   
 
   

    //Secondes
    if (document.getElementById('inputSecondes').checked) {
        if (ageEntrer < 122 && ageEntrer > 0) {

            let secondsAge = ageEntrer * 60 * 60 * 24 * 365;
            let ageSpace = secondsAge.toLocaleString()

            console.log(ageSpace);
            let age = document.getElementById("result").innerHTML = "Vous avez " + ageSpace + " de secondes au compteur.";

        }

        if (ageEntrer == 0) {
            let age = document.getElementById("result").innerHTML = messageBirth
        }
        if (ageEntrer > 121) {
            let age = document.getElementById("result").innerHTML = messageDoyen
        }

        if (ageEntrer < 0) {
            let age = document.getElementById("result").innerHTML = messageEgg
        }
    }


    //Minutes
    if (document.getElementById('inputMinutes').checked) {
        let minutesAge = ageEntrer * 60 * 24 * 365;
        let ageSpace = minutesAge.toLocaleString()

        console.log(ageSpace);
        let age = document.getElementById("result").innerHTML = "Vous avez " + ageSpace + " de minutes au compteur.";

        if (ageEntrer == 0) {
            let age = document.getElementById("result").innerHTML = messageBirth
        }
        if (ageEntrer > 121) {
            let age = document.getElementById("result").innerHTML = messageDoyen
        }

        if (ageEntrer < 0) {
            let age = document.getElementById("result").innerHTML = messageEgg
        }

    }

    //heures
    if (document.getElementById('inputHeures').checked) {
        let hourAge = ageEntrer * 24 * 365;
        let ageSpace = hourAge.toLocaleString()

        console.log(ageSpace);
        let age = document.getElementById("result").innerHTML = "Vous avez " + ageSpace + " d'heures au compteur.";

        if (ageEntrer == 0) {
            let age = document.getElementById("result").innerHTML = messageBirth
        }
        if (ageEntrer > 121) {
            let age = document.getElementById("result").innerHTML = messageDoyen
        }

        if (ageEntrer < 0) {
            let age = document.getElementById("result").innerHTML = messageEgg
        }
    }

    //jours
    if (document.getElementById('inputJours').checked) {
        let daysAge = ageEntrer * 365;
        let ageSpace = daysAge.toLocaleString()

        console.log(ageSpace);
        let age = document.getElementById("result").innerHTML = "Vous avez " + ageSpace + " de jours au compteur.";

        if (ageEntrer == 0) {
            let age = document.getElementById("result").innerHTML = messageBirth
        }
        if (ageEntrer > 121) {
            let age = document.getElementById("result").innerHTML = messageDoyen
        }

        if (ageEntrer < 0) {
            let age = document.getElementById("result").innerHTML = messageEgg
        }
    }

});