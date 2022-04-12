var x;

x= parseInt(prompt("Quel est votre âge ? "));
if (x>0 && x<=120) {
    alert("Votre âge est valide");
}
    else {
        alert("Votre âge est invalide, veuillez le resaisir ");
        x= parseInt(prompt("Quel est votre âge ? "));
    }
