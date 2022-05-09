var callBackGetSucsess = function (data) {
    console.log("donnees api", data)
    var element = document.getElementById(typeCocktail);
    // var element2 = document.createElement("div");
    for (let i = 0; i < data.drinks.length; i++) {
        // Permet de créer plusieurs div
        var element2 = document.createElement("div");
        // element2.setAttribute("class", "cards col-lg-4");
        element2.innerHTML = "<p>" + data.drinks[i].strDrink + "</p>"
        element.appendChild(element2);
    }
}


function buttonClickGET() {
    var url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=gin"
    $.get(url, callBackGetSucsess).done(function () {
        //alert("second success");
    })
}