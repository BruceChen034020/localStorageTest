/* Global variables */
var textBoxA;
var buttonA;
var textBoxB;
var buttonB;
var textBoxC;
var buttonC;

/* p5 functions */
function setup(){
  console.log(localStorage);

    textBoxA = document.getElementById("textBoxA");
    buttonA = document.getElementById("buttonA");
    textBoxB = document.getElementById("textBoxB");
    buttonB = document.getElementById("buttonB");
    textBoxC = document.getElementById("textBoxC");
    buttonC = document.getElementById("buttonC");

    buttonA.addEventListener("click", buttonA_Clicked);
    buttonB.addEventListener("click", buttonB_Clicked);
    buttonC.addEventListener("click", buttonC_Clicked);

    //textBoxA.innerHTML = localStorage.getItem("a");
    textBoxA.innerHTML = localStorage;
    textBoxB.innerHTML = localStorage.getItem("b");
    textBoxC.innerHTML = localStorage.getItem("c");
}

/* onlick events */
function buttonA_Clicked(){
  //localStorage.setItem("a", textBoxA.value);
  localStorage = textBoxA.value;
  console.log(localStorage);
}
function buttonB_Clicked(){
  localStorage.setItem("b", textBoxB.value);
}
function buttonC_Clicked(){
  localStorage.setItem("c", textBoxC.value);
}
