/*
感謝您觀看這份程式碼
作品名稱: N/A
作者: 陳光穎 Bruce Chen
聯絡方式
  Facebook連結: https://www.facebook.com/bruce.chen.372
  LINE ID: brucechen0
最後修改日期: 2018/2/3
版本: N/A
發表於: https://brucechen034020.github.io/
程式碼尺度
  N/A
作者註解:
  1. 如本網頁有 bug 請用 Facebook(Messenger) 通知 Bruce Chen，謝謝。
  2. 如有任何建議，請用 Facebook(Messenger) 通知 Bruce Chen，謝謝。
  */

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
