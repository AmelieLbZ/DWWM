var typeSearch;
var queryLoc = document.getElementById("queryLoc").value;
let searchByName = document.getElementById("searchByName");
let searchByIngredients = document.getElementById("searchByIngredients");

//  SEARCH BY NAME
searchByName.addEventListener("change", function () {
  if (this.checked) {
    searchByIngredients.checked = false;
    type = "Nom";
  } else {
    type = "";
  }
});
// ---------------------------------------------------------------------------------------------

// SEARCH BY INGREDIENTS------------------------------------------------------------------------
searchByIngredients.addEventListener("change", function () {
  if (this.checked) {
    searchByName.checked = false;
    type = "ingredients";
  } else {
    type = "";
  }
});
// ------------------------------------------------------------------------------------------------

// CALLBACK NAME
var callBackGetName = function (data) {
  console.log(data);
  var element = document.getElementById("zone_cocktail");
  element.setAttribute("class", "row");
  // Enleve la dernière recherche quand on clique sur le bouton
  element.innerHTML = "";
  // ----------------------------------------------------------
  for (let i = 0; i < data.drinks.length; i++) {
    // Permet de créer plusieurs div
    var element2 = document.createElement("div");
    element2.setAttribute("class", "cards col-lg-4");
    element2.innerHTML =
      "<a href='page2.html'> <img src='" +
      data.drinks[i].strDrinkThumb +
      "/preview'><p class='card-text'>" +
      data.drinks[i].strDrink +
      "</p></a>";
    element.appendChild(element2);
    // --------------------------------
  }
};
// -------------------------------------------------------------------------------------

// CALLBACK INGREDIENTS-----------------------------------------------------------------
var callBackGetIngredients = function (data) {
  console.log(data);
  var element = document.getElementById("zone_cocktail");
  element.setAttribute("class", "row");
  element.innerHTML = "";
  for (let i = 0; i < data.drinks.length; i++) {
    var element2 = document.createElement("div");
    element2.setAttribute("class", " cards col-lg-2");
    element2.innerHTML =
      "<a href='page2.html'><img src='" +
      data.drinks[i].strDrinkThumb +
      "/preview'><p class='card-text'>" +
      data.drinks[i].strDrink +
      "</p></a>";
    element.appendChild(element2);
  }
};
// -----------------------------------------------------------------------------------------

// CALLBACK RANDOM--------------------------------------------------------------------------
var callBackRandom = function (data) {
  // VARIABLE----------------------------------------------
  let close = document.getElementById("closebtn");
  let close2 = document.getElementById("closebtn2");
  let randomCocktail = data.drinks[length].strDrink;
  let image = data.drinks[length].strDrinkThumb;
  let element = document.getElementById("zone_cocktail");
  let modal = document.getElementById("zone_modal");
  let element2 = document.createElement("div");
  let modalTitle = document.getElementById("randomModalLabel");
  // ------------------------------------------------------

  // SET ATTRIBUTE-----------------------------------------
  element.setAttribute("class", "row");
  element2.setAttribute("class", "cards col-lg-2");
  element2.setAttribute("data-bs-toggle", "modal");
  element2.setAttribute("data-bs-target", "#randomModal");
  // ------------------------------------------------------

  element2.innerHTML =
    "<img src='" +
    image +
    "/preview'><p class='card-text'>" +
    randomCocktail +
    "</p>";

  // FUNCTION MODAL-------------------------------------------------------------------------
  element2.addEventListener("click", function () {
    console.log(data);
    var modalContent = document.createElement("div");
    modalContent.setAttribute("class", "modalstyle row");
    modalContent.setAttribute("id", "remove");
    // MODAL TITLE--------------------------------------------------------------------------
    modalTitle.innerHTML = randomCocktail;
    // -------------------------------------------------------------------------------------

    let listeIngr = document.getElementById("liste-ingr");
    for (let i = 1; i <= 16; i++) {
      let tg = document.createElement("li");
      tg.setAttribute("id", "gmalocu");
      if (
        data.drinks[length][`strIngredient${i}`] == null ||
        data.drinks[length][`strIngredient${i}`] == undefined
      ) {
        break;
      }
      if (
        data.drinks[length][`strMeasure${i}`] != null ||
        data.drinks[length][`strMeasure${i}`] != undefined
      ) {
        tg.innerHTML =
          data.drinks[length][`strMeasure${i}`] +
          data.drinks[length][`strIngredient${i}`];
        // tg.appendChild(listeIngr);
      } else {
        tg.innerHTML = data.drinks[length][`strIngredient${i}`];
        // tg.appendChild(listeIngr);
      }
      console.log(tg);
    }
    // MODAL CONTENT------------------------------------------------------------------------
    modalContent.innerHTML =
      "<div class='col-md-6'><img src='" +
      image +
      "/preview'><div class='row'><div class='col'><strong>Category : </strong>" +
      data.drinks[length].strCategory +
      "</div><div class='row'><div class='col'><strong>Type : </strong>" +
      data.drinks[length].strAlcoholic +
      "</div></div><div class='row'><div class='col'><strong>Glass : </strong>" +
      data.drinks[length].strGlass +
      "</div></div></div></div><div class='col-md-6'><ul id='liste-ingr'></ul></div><div class='row mt-2'><div class='col-md-12'><strong>Recipe : </strong>" +
      data.drinks[length].strInstructions +
      "</div></div>";
    // -------------------------------------------------------------------------------------
    // modalContent.appendChild(listeIngr);
    modal.appendChild(modalContent);
    // FUNCTION CLOSE-------------------------------------------------------------
    close.addEventListener("click", function () {
      var modalremove = document.getElementById("remove");
      modalremove.remove();
    });
    close2.addEventListener("click", function () {
      var modalremove = document.getElementById("remove");
      modalremove.remove();
    });
    // -----------------------------------------------------------------------------------------
  });
  element.appendChild(element2);
};
// ---------------------------------------------------------------------------
// FONCTION QUI SE DECLENCHE EN CLIQUANT SUR LE BOUTON--------------------------------------
function buttonClickGET() {
  var queryLoc = document.getElementById("queryLoc").value;
  if (searchByName.checked) {
    var url =
      "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=" + queryLoc;
    queryLoc = "";

    $.get(url, callBackGetName).fail(function () {
      alert("error");
    });
  }

  if (searchByIngredients.checked) {
    var url =
      "https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=" + queryLoc;
    queryLoc = "";

    $.get(url, callBackGetIngredients).fail(function () {
      alert("error");
    });
  }
}
// -----------------------------------------------------------------------------------------

// FONCTION QUI AFFICHAGE DES COCKTAILS ALEATOIRES AU LANCEMENT DE LA PAGE------------------
function getRandomCocktail() {
  var url = "https://www.thecocktaildb.com/api/json/v1/1/random.php";
  $.get(url, callBackRandom).fail(function () {
    alert("error");
  });
}

function afficherRandomCocktail() {
  for (let i = 0; i < 56; i++) {
    getRandomCocktail();
  }
}
