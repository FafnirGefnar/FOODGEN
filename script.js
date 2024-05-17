//console.log("tere");
//console.log("tere");

//confirm("Today is sunny.");
//prompt("What is your name?");
//alert("DANGER!");

//nimi = prompt("Mis on sinu nimi?")
//vanus = prompt("Kui vana sa oled?");

// let klient = {
//     nimi:prompt("Mis on sinu nimi?"),
//     vanus:prompt("Kui vana sa oled?"),
// }

// function teretus(nimi) {
//     alert("Tere, " + nimi + "!")
// }
// teretus(klient.nimi)


let toidud = ["Kanasalat", "Singipitsa", "Juustuburger", "Tortilla kebab", "Tomatipasta", "Kalavõileib", "Suitsukala", "Nigiri sushi", "Caesari salat", "Kebab friikartulitega", "Ahjuforell", "Lasanje", "Krevetisupp", "Tomatisupp", "Kana ja riis", "Veise antrekoot"];

// for (let index = 0; index < toidud.length; index++) {
//     //const element = array[index];
//     console.log(toidud[index]);  
// }

// var kalaSoov = confirm(klient.nimi + ", kas sa kala sööd?");

// if (kalaSoov) {
//     toidud.push("sushi");
// }

function randomToit(list) {
    let randInt = Math.floor(Math.random()*list.length);
    return(list[randInt]);
}

toit = randomToit(toidud)
console.log("Sinu tänane toit: " + toit);

// document.addEventListener
document.querySelector("#toit").innerHTML = "Sinu tänane toit: " + toit;
