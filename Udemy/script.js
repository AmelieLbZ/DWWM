// class Animal {
//     constructor(nombreDePattes, poids){
//         this.nombreDePattes=nombreDePattes;
//         this.poids=poids;
//     }

// presentation(){
//     console.log("Cet animal possède "+this.nombreDePattes+" et pèse "+this.poids+".");
//     }   
// }


// class Oiseau extends Animal{
//     constructor(nombreDePattes, poids, longueurDesAiles){
//         super(nombreDePattes, poids);     //va 
//         this.longueurDesAiles=longueurDesAiles;
//     }

//     voler(){
//         console.log("L'oiseau vole !");
//     }
// }
// var perroquet = new Oiseau('2', '1.5kg',"grandes");
// console.log(perroquet);
// perroquet.presentation();
// perroquet.voler();

class Utilisateur{
    constructor(prenom, nom, email){
        this.prenom = prenom;
        this.nom = nom;
        this.email=email;
    }
get nomComplet(){
    return this.prenom+" "+this.nom;
}
// sePresenter(){
//     console.log("Je m'appelle "+this.prenom+" "+this.nom);


// }
}
var mark = new Utilisateur('Mark', 'Zuckerberg', 'mark@facebook.com');
console.log(mark.nomComplet);