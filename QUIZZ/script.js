function ChargeInfosJson() {
  fetch("format_quiz.json")
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data);
      start(data);
      
    });
}


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
      let propsListe = document.createElement("div");
      propsListe.setAttribute("class", "titreprops");
      propsListe.innerHTML += "<h2>" + data[x].choices[y] + "</h2>";
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

