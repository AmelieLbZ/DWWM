let quiz = new Array();

function ChargeInfosJson() {
    
    fetch('format_quiz.json')
        .then(response => { 
            return response.json();
        })
        .then(data => {
            console.log(data);
            start(data);
        }
        );
}


// fichier commun
    function CreateDivs(data) {
        const question = document.getElementById("questionContainer");
      
        for (let x = 0; x < data.length; x++) {
      
          let questionListe = document.createElement("div");
          let questionTitre = document.createElement("h1")
          
          questionTitre.setAttribute("class", "titrequestion" + x);
          questionListe.setAttribute("id", "question" + x)
          
          questionTitre.innerHTML += "<strong>Question : </strong>" + data[x].question;
      
          questionListe.appendChild(questionTitre);
          
          let repList = document.createElement("div");
          repList.setAttribute("class", "reponseExplication");
          for (let y = 0; y < data[x].choices.length; y++) {
            let propsListe = document.createElement("h2");
            propsListe.setAttribute("class", "titreprops" + y);
            propsListe.innerHTML += data[x].choices[y];
            questionListe.appendChild(propsListe);
          }
      
          repList.innerHTML = `<h3><strong>Réponse :</strong>  ${data[x].correct}</h3><p>${data[x].explanation}</p>`;
      
          questionListe.appendChild(repList);
          question.appendChild(questionListe);
        }
      }
      
      var start = function (data) {
        var listeQuestion1 
        CreateDivs(data);
      
        var round = 0
      
        for (x = 0; x < data.length; x++){
          document.getElementById("question" + x).style.display = "none";
        }
      
        document.getElementById("question" + round).style.display = "block"
      
      };
    // pour le click du choix
// evaluate[0].addEventListener("click", () => {
//     if (selected == "true") {
//         result[0].innerHTML = "True";
//         result[0].style.color = "green";
//     } else {
//         result[0].innerHTML = "False";
//         result[0].style.color = "red";
//     }
// })
// }



// aide Guillaume : 
//Affichage de la question et des réponse (manipulation du DOM)
// function showQuestion(data) {
//     dataElement.innerText = data.question;
//     data.choices.forEach((answer) => {

//         //on créé un bouton pour chaque réponse
//         const button = document.createElement('button');
//         button.innerText = answer;
//         button.classList.add('btn');

//         //pour la réponse correct , on rajoute un petit élement sur le bouton
//         if (answer === question.correct) {
//             ;
//             button.dataset.correct = question.correct;
//         }
//     }

//         //sur chaque bouton, on rajoute un evenement on click qui appelera la fonction selectAnswer
//         button.addEventListener('click', LafonctionAAppelerLorsduClick);

//         answerButtonsElement.appendChild(button);
//     })
//     //on cache la div explication
//     explainElement.classList.add('hide');
//     // on remplit cette div explication avec l'explication de la réponse de l'élement en cours du json
//     explainElement.innerText = question.explanation;
// }