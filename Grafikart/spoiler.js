/**
 * lorsque je clique sur le btn dans la class .spoiler 
 * alors j'aoute la class .visible à l'élément suivant
 *
 */

var button = document.querySelector('.spoiler button')
/* je sélectionne ts les btn qui sont dans la class .spoiler*/
button.addEventListener('click', function(){
/*on écoute le clic du btn*/
    this.nextElementSibling.classList.add('visible') /*this = button*/
    this.parentNode.removeChild(this) /*je retire le btn en appelant le parent pour faire le remove child*/
})
/*on inclus le code dans une function récursive pour ne pas avoir un autre javascript qui rentre en collision avec notre code ci-dessous*/
    var elements=document.querySelectorAll('.spoiler')
    /*je sélect tous les éléments qui ont la class .spoiler*/
    var createSpoilerButton = function (element){
    /* cette fonction va prendre en param un element et c'est sur cet élément là qu'on va devoir créer un btn*/
   //je crée la span .spoiler-content
    var span = document.createElement('span')
    span.className = 'spoiler-content' /*je dois donner une class particulière à cette span*/
    span.innerHTML = element.innerHTML   /*Le contenu HTML de la span sera le contenu HTML de mon élément : dans cette span je veux le texte qui correspond au text qui est dans mon élément*/
    
    //je créé le bouton
    var button = document.createElement('button') /*je créé une variable où je dois créémon btn*/
    button.textContent='Afficher le Spoiler'
    /*je peux ensuite rajouter et la span mon btn au DOM mais je nettoie l'éléménet avant pour ne plus voir la phrase*/
    element.innerHTML = ' '
    element.appendChild(button)
    element.appendChild(span)


    /*on met l'écouteur d'évement pour le clic*/
    button.addEventListener('click', function(){
        button.parentNode.removeChild(button)
        span.classList.add('visible')
    } )
}
/*je fais ensuite une boucle pour les parcourir*/
for(var i=0; i < elements.length; i++){
    createSpoilerButton(elements[i])
}