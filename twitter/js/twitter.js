var nomeUtente = document.querySelector("#nomeUtente");
var password = document.querySelector("#password");
var feedUtente = document.querySelector("#feedUtente");

var btnInvia = document.querySelector("#btnInvia");
btnInvia.addEventListener("click", accesso);
const FORMATO_PW =/^(?=.[a-z])(?=.[A-Z])(?=.\d)(?=.[@$!%?&])[A-Za-z\d@$!%?&]{8,}$/;

function accesso() {
    console.log(nomeUtente.value);
    console.log(password.value);
    feedUtente.innerHTML="";
    let nomelength=nomeUtente.value.length;
    let isGoodP = password.value.match(FORMATO_PW);
    if (nomelength >= 4 && nomelength <= 15 && isGoodP) {
        console.log("corretto");

    
  } else {
    feedUtente.innerHTML = `min.4 - max:15`;
  }
}
