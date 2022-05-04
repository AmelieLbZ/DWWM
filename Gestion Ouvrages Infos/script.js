
// function CreeTableau() {
//     this.length = CreeTableau.length
//     for (var i = 0; i < this.length; i++){
//     this[i+1] = CreeTableau.authors[i]
//     }
    

function ChargeInfosJson() {
    fetch('books.json')
      .then(response => {  // Une fois que le fichier est chargé /
        return response.json();  // Convertissons le en json /
      })
      .then(data => { // Une fois le fichier converti /
        console.log(data); // Appelons notre fonction */
        CreateDivs(data);
    }
    );
}

