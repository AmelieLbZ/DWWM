
function calculerIMC(){
    let poids = prompt("Quel est votre poids en kg ?");
    let taille= prompt("Quelle est votre taille en cm ?");
    let tailleEnMetre = parseFloat(Math.pow((taille/100),2));
    let imc=poids/tailleEnMetre;
    alert("Votre IMC est de : "+imc);
}
calculerIMC();