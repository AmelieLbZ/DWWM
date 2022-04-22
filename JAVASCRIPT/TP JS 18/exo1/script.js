
function verifMois() {
    let mois=parseInt(document.getElementById("mois").value);
    if ((mois>12)||(mois<1)) {
        alert(mois + " Le mois est incorrect");}
     else {
        alert(mois + " Le mois est correct");
    }
}