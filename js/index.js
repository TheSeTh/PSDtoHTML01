'use strict'

document.addEventListener('DOMContentLoaded', function() {
   var btn_one = {button: document.getElementById('first_btn'),
                  clicked: false};
   var text_one = document.getElementById('first_text');
   var btn_two = {button: document.getElementById('second_btn'),
                  clicked: false};
   var text_two = document.getElementById('second_text');               
   var btn_three = {button: document.getElementById('third_btn'),
                  clicked: false};
   var text_three = document.getElementById('third_text');               
   var btn_four = {button: document.getElementById('fourth_btn'),
                  clicked: false};
   var text_four = document.getElementById('fourth_text');               

   btn_one.button.onclick = function() {
       if(!btn_one.clicked) {
           btn_one.button.childNodes[1].childNodes[1].classList.remove("fa-plus");
           btn_one.button.childNodes[1].childNodes[1].classList.add("fa-minus");
           btn_one.button.classList.add("btn-highlight");
           text_one.childNodes[1].style.display = "block";
           btn_one.clicked = true;
       }
       else {
           btn_one.button.childNodes[1].childNodes[1].classList.remove("fa-minus");
           btn_one.button.childNodes[1].childNodes[1].classList.add("fa-plus");
           btn_one.button.classList.remove("btn-highlight");
           text_one.childNodes[1].style.display = "none";
           btn_one.clicked = false;
       }
   }
   btn_two.button.onclick = function() {
       if(!btn_two.clicked) {
           btn_two.button.childNodes[1].childNodes[1].classList.remove("fa-plus");
           btn_two.button.childNodes[1].childNodes[1].classList.add("fa-minus");
           btn_two.button.classList.add("btn-highlight");
           text_two.childNodes[1].style.display = "block";
           btn_two.clicked = true;
       }
       else {
           btn_two.button.childNodes[1].childNodes[1].classList.remove("fa-minus");
           btn_two.button.childNodes[1].childNodes[1].classList.add("fa-plus");
           btn_two.button.classList.remove("btn-highlight");
           text_two.childNodes[1].style.display = "none";
           btn_two.clicked = false;
       }
   }
   btn_three.button.onclick = function() {
       if(!btn_three.clicked) {
           btn_three.button.childNodes[1].childNodes[1].classList.remove("fa-plus");
           btn_three.button.childNodes[1].childNodes[1].classList.add("fa-minus");
           btn_three.button.classList.add("btn-highlight");
           text_three.childNodes[1].style.display = "block";
           btn_three.clicked = true;
       }
       else {
           btn_three.button.childNodes[1].childNodes[1].classList.remove("fa-minus");
           btn_three.button.childNodes[1].childNodes[1].classList.add("fa-plus");
           btn_three.button.classList.remove("btn-highlight");
           text_three.childNodes[1].style.display = "none";
           btn_three.clicked = false;
       }
   }
   btn_four.button.onclick = function() {
       if(!btn_four.clicked) {
           btn_four.button.childNodes[1].childNodes[1].classList.remove("fa-plus");
           btn_four.button.childNodes[1].childNodes[1].classList.add("fa-minus");
           btn_four.button.classList.add("btn-highlight");
           text_four.childNodes[1].style.display = "block";
           btn_four.clicked = true;
       }
       else {
           btn_four.button.childNodes[1].childNodes[1].classList.remove("fa-minus");
           btn_four.button.childNodes[1].childNodes[1].classList.add("fa-plus");
           btn_four.button.classList.remove("btn-highlight");
           text_four.childNodes[1].style.display = "none";
           btn_four.clicked = false;
       }
   }
});