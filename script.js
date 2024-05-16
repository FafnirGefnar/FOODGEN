console.log("tere");
console.log("tere");


//confirm("Today is sunny.");
//prompt("What is your name?");
//alert("DANGER!");

//nimi = prompt("Mis on sinu nimi?")
//vanus = prompt("Kui vana sa oled?");


let toidud = ["banaan", "juustuburger", "mullivesi"]
console.log(toidud);

for (let index = 0; index < toidud.length; index++) {
    //const element = array[index];
    console.log(toidud[index]);
    
}

var kalaSoov = confirm("Kas sa kala sööd? ")

if (kalaSoov) {
    toidud.push("sushi")
}

console.log(toidud);