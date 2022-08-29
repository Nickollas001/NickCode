var idols =document.getElementById("idols");
var aceLeague =document.getElementById("ace_league");
var buttonIdols=document.getElementById("button-idols");
var textoIdols = document.getElementById("texto-idols");
var textoIdols2 = document.getElementById("texto-idols2");
var texto_ace_league = document.getElementById("texto-ace_league");
var texto_ace_league2 = document.getElementById("texto-ace_league2");
var button_ace_league = document.getElementById("button-ace_league");

idols.addEventListener("click",function(){
    textoIdols.style.color = "white";
    textoIdols2.style.color = "white";
    textoIdols.style.display = "block";
    textoIdols2.style.display = "block";
    buttonIdols.style.display = "block";
    idols.style.background = "purple";
    texto_ace_league.style.display = "none"
    texto_ace_league2.style.display = "none"
    button_ace_league.style.display = "none"
    aceLeague.style.background = "white";
})
aceLeague.addEventListener("click",function(){
    textoIdols.style.display = "none";
    textoIdols2.style.display = "none";
    buttonIdols.style.display = "none";
    idols.style.background = "white";
    texto_ace_league.style.display = "block"
    texto_ace_league2.style.display = "block"
    button_ace_league.style.display = "block"
    aceLeague.style.background = "black";
    texto_ace_league.style.color = "white";
    texto_ace_league2.style.color = "white";
});


