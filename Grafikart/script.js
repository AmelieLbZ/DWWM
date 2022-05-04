var liens = document.querySelectorAll('a.external')
for(var i=0; i<liens.length; i++){
    var lien=liens[i]
    lien.addEventListener('click', function(event){
        console.log("J'ai cliqué sur le lien", event);
        var reponse = window.confirm('Voulez-vous vraiment quitter le site')
        if(reponse===false){
            event.preventDefault()
        }
    })
}
document.querySelector('p').addEventListener('click', function(event){
            console.log("J'ai cliquer sur le paragraphe", event);

})

// var ps = document.querySelectorAll('p')
// for (var i = 0; i < ps.length; i++) {
//     var p = ps[i]  
//     p.addEventListener('mouseover', function(){
//         this.classList.add('red')
//     })
//     p.addEventListener('mouseout', function(){
//         this.classList.remove('red')
//     })
// }