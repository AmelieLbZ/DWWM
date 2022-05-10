
var options ={weekday:'long', year:'numeric', month:'long', day: 'numeric'};
var booksList = new Array();
var authorsList=new Array();
var categoriesList=new Array();    

function jsonOnLoad() {
    fetch('books.json')
      .then(response => {  // Une fois que le fichier est chargé /
        return response.json();  // Convertissons le en json /
      })
      .then(data => { // Une fois le fichier converti /
        console.log(data); // Appelons notre fonction */
        createList(data);
      });
}
//on boucle sur l'enseble des livres
var createList=function(data){
  for(var x=0; x<data.length;xi++)

    var book=data[x];
    booksList.push(book);

 //on boucle sur les authors d'un livre
  for(var y=0;y<book.authors.length;y++){
    var author=book.authors[y];

   //on vérifie si l'auteur en question n'est pas dejà dans la liste
     if(authorsList.indexOf(author)==-1){
     authorsList.push(author);
      }
  }

 //on boucle sur les catégories de livres
 for(var y=0; y<book.categories.length;y++){
   var category=book.categories[y];
   
   //on vérifie que la catégorie en question n'est pas dans la liste
  if(categoriesList.indexOf(category)==-1){
  categoriesList.push(category);
  }
}
}

//tir alphabétique des listes
booksList.sort();
authorsList.sort();
categoriesList.sort();

for (var x=0; x<authorsList.length;x++){
  var option = document.createElement("option");
  option.value=authorsList[x];
  option.innerText = authorsList[x];
  document.getElementById('listAuthors').appendChild(option);
}
for (var x=0;x<categoriesList;x++){
  var option=document.createElement("option");
  option.value=categoriesList[x];
  option.innerText=categoriesList[x];
  document.getElementById('listCategories').appendChild(option);
  }
//Appelons notre fonction
showBooks(booksList);

//fonction qui charge les livres dans le html dans les cards
var showBooks = function(list){
  for (var y=0; y<list.length;y++){
    var bookListe=document.createElement("div");
    bookListe.setAttribute("class", "card");
    if ((list[y].thumbnailUrl ==undefined)||(list[y].thumbnailUrl==null)){
      list[y].thumbnailUrl= "https://p1.storage.canalblog.com/14/48/1145642/91330992_o.png";
    }
    var titre;
    if(list[y].title.length>20){
      titre=list[y].title.substring(0,20)+'(...)'
      }
      else{
        titre=list[y].title;
      }

      var descriptio;
      var descriptionshort;

      
  }
}
