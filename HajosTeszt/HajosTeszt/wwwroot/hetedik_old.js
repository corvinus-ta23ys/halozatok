
var kérdések;
var kérdésSorszám = 0;

function letöltés() {
    fetch('questions.json')
        .then(response => response.json())
        .then(data => letöltésBefejeződött(data));
}

function letöltésBefejeződött(d) {
    console.log("Sikeres letöltés")
    console.log(d)
    kérdések = d;
    kérdésMegjelenítés(0);
}

function Vissza() {
    if (kérdésSorszám == 0) {
        kérdésSorszám = kérdések.length-1;
        kérdésMegjelenítés(kérdésSorszám);
    }
    else {
        kérdésSorszám--;
        kérdésMegjelenítés(kérdésSorszám);
    }
}
function Előre() {
    if (kérdésSorszám == kérdések.length-1) {
        kérdésSorszám = 0;
        kérdésMegjelenítés(kérdésSorszám);
    }
    else {
        kérdésSorszám++;
        kérdésMegjelenítés(kérdésSorszám);
    }
}

var kérdésMegjelenítés = function (kérdésSzáma) {
    let kérdés_szöveg = document.getElementById("kérdés_szöveg");
    let kép = document.getElementById("kép1");
    let válasz1 = document.getElementById("válasz1");
    let válasz2 = document.getElementById("válasz2");
    let válasz3 = document.getElementById("válasz3");

    kérdés_szöveg.innerHTML = kérdések[kérdésSzáma].questionText
    kép.src = "https://szoft1.comeback.hu/hajo/" + kérdések[kérdésSzáma].image
    válasz1.innerText = kérdések[kérdésSzáma].answer1
    válasz2.innerText = kérdések[kérdésSzáma].answer2
    válasz3.innerText = kérdések[kérdésSzáma].answer3
}
window.onload = () => {
    letöltés();
    kérdésBetöltés();
    document.getElementById("vissza").onclick = () => {
        Vissza();
    }
    document.getElementById("előre").onclick = () => {
        Előre();
    }

}
/*function kérdésBetöltés(id) {
    fetch(`/questions/${id}`)
        .then(válaszfeldolgozás)
        .then(kérdésMegjelenítés);
}  
*/



function válaszfeldolgozás(válasz) {
    if (!válasz.ok) {
        console.error(`Hibás  válasz: ${response.status}`)
    }
    else {
        return válasz.json()
    }
}
function válaszfeldolgozás(válasz) {
    if (!válasz.ok) {
        console.error(`Hibás válasz: ${response.status}`)
    }
    else {
        return válasz.json()
    }
}

var hotList = [];           //Az éppen gyakoroltatott kérdések listája 
var questionsInHotList = 3; //Ez majd 7 lesz, teszteléshez jobb a 3. 
var displayedQuestion;      //A hotList-ből éppen ez a kérdés van kint
var numberOfQuestions;      //Kérdések száma a teljes adatbázisban
var nextQuestion = 1;       //A következő kérdés száma a teljes listában

var hotList = [];
var questionsInHotList = 3; //Ez majd 7 lesz, teszteléshez jobb a 3. 

var displayedQuestion;      //A hotList-ből éppen ez a kérdés van kint
var numberOfQuestions;      //Kérdések száma a teljes adatbázisban
var nextQuestion = 1;      //A következő kérdés száma a teljes listában

function init() {
    for (var i = 0; i < questionsInHotList; i++) {
        let q = {
            question: {},
            goodAnswers: 0
        }
        hotList[i] = q;
    }

    //Első kérdések letöltése
    for (var i = 0; i < questionsInHotList; i++) {
        kérdésBetöltés(nextQuestion, i);
        nextQuestion++;
    }
}

function kérdésBetöltés(questionNumber, destination) {
    fetch(`/questions/${questionNumber}`)
        .then(
            result => {
                if (!result.ok) {
                    console.error(`Hibás letöltés: ${response.status}`)
                }
                else {
                    return result.json()
                }
            }
        )
        .then(
            q => {
                hotList[destination].question = q;
                hotList[destination].goodAnswers = 0;
                console.log(`A ${questionNumber}. kérdés letöltve a hot list ${destination}. helyére`)
            }
        );
}