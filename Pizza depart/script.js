
/* Allons chercher un fichier JSON */
function ChargeInfosJson() {
  fetch('data.json')
    .then(response => {  // Une fois que le fichier est chargé /
      return response.json();  // Convertissons le en json /
    })
    .then(data => { // Une fois le fichier converti /
      console.log(data); // Appelons notre fonction */
      CreateDivs(data);

    }
    );
}

function CreateDivs(data) {
  const preview = document.getElementsByClassName("preview")[0];
  preview.innerHTML = "";

  const nom = document.createElement("div");
  nom.innerHTML = data.nom
  nom.setAttribute("class", "nom")

  const slogan = document.createElement("div");
  slogan.innerHTML = data.slogan;
  slogan.setAttribute("class", "slogan");

  const pizzas = document.createElement("div");
  pizzas.innerHTML = data.pizzas;

  preview.appendChild(nom);
  preview.appendChild(slogan);
  // preview.appendChild(pizzas);



  var listPizzas = data.pizzas;
  var pizzeriaListPizzas = document.createElement("div");
  pizzeriaListPizzas.setAttribute("class", "contenu");
  pizzeriaListPizzas.setAttribute("id", "PizzaList");


  for (var x = 0; x < listPizzas.length; x++) {


    var pizzaListeElement = document.createElement("div");
    pizzaListeElement.setAttribute("class", "card");
    pizzaListeElement.innerHTML = '<h5 class="nom">'
      + listPizzas[x].nomPizza + '</h5>'
      + '<h2 class="pizzaprix">'
      + listPizzas[x].prix + '</h2> '
      + '<img class="pizzaimage" src="'
      + listPizzas[x].image + '" />';

      var listGarnitures=listPizzas[x].garniture;

      for (var y=0;y<listGarnitures.length;y++){
        // var garniture = document.createElement("ul");
        // garniture.setAttribute("class", "garn");

        pizzaListeElement.innerHTML +="<ul>" + listGarnitures[y]+ "</ul>"
 

      }


    pizzeriaListPizzas.appendChild(pizzaListeElement);

  }

  preview.appendChild(pizzeriaListPizzas);



  // listIngre.appendChild(pizzaListGarn);
}