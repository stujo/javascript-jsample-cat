"use strict";


var five = 5;

console.log("5 is a " + typeof five);

var five_string = '5';


var mary = "Mary";

console.log("'Mary' is a " + typeof foo);


function toggleClassById(id, klass){
  var element = document.getElementById(id);
  if(element){
    element.classList.toggle(klass);
  }
}

function foo()
{
  console.log("foo");
}

console.log("'function foo(){}' is a " + typeof foo);

function getTemplate(selector){
  return document.querySelector(selector).innerHTML
}

function toggleItCallback(event){
  toggleClassById("doit_target", "red");
}


function doItCallback(event){
  document.querySelector("#doit_target").innerHTML = getTemplate('#jsample_image_template');
}

function undoItCallback(event){
  document.querySelector("#doit_target").innerHTML = "";
}


function jsampleOnLoadCallback(){
  console.log("On Load Callback Called");

  document.querySelector("#doit").addEventListener("click", doItCallback, false);
  document.querySelector("#undoit").addEventListener("click", undoItCallback, false);
  document.querySelector("#toggleit").addEventListener("click", toggleItCallback, false);

}