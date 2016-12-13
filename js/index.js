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
   var quotesCont = document.getElementById('quotesCont'); 
   var quotes = quotesCont.children;
   var currentBtnIndex = 0; 
   var btn_left = document.getElementById('leftClick');
   var btn_right = document.getElementById('rightClick');
   var hamburgerMenu = document.querySelector('.hamburger');
   var expandedMenu = document.querySelector('.hamExpanded');
   var desktopMenu = document.querySelector('.desktopMenu');
   var expandableDesktopMenuItems = desktopMenu.querySelectorAll('.expandable');
   var expandableDesktopMenuChildren = desktopMenu.querySelectorAll('.deskExpanded');
   var expandableMenuItems = expandedMenu.querySelectorAll('.expandable');
   var nonExpandableMenuItems = expandedMenu.querySelectorAll('a[href^="#"]');
   var menuActive = false;
   var deskMenuActive = false;

   Array.prototype.forEach.call(expandableDesktopMenuItems, function(menuItem, i) {
       menuItem.onmouseenter = function() {
           if(!deskMenuActive) {
               var itemRect = this.getBoundingClientRect();
               expandableDesktopMenuChildren[i].style.top = (itemRect.bottom - itemRect.top) + "px";
               expandableDesktopMenuChildren[i].style.left = (itemRect.left + (itemRect.right - itemRect.left)/2) + "px";
               expandableDesktopMenuChildren[i].style.minWidth = (itemRect.right - itemRect.left) + "px";
               expandableDesktopMenuChildren[i].style.display = "block";
               deskMenuActive = true;
           }
       }
       menuItem.onmouseleave = function() {
           expandableDesktopMenuChildren[i].style.display = "none";
           deskMenuActive = false;
       }
   });

   function hideAllMenuItems() {
       Array.prototype.forEach.call(expandableMenuItems, function(menuItem, i){
           if(menuItem.classList.contains("expanded")) {
               hideMenuItem(menuItem);
           }
       })
   }

   function hideMenuItem(el) {
        el.firstElementChild.nextElementSibling.innerHTML = "&or;";
        el.classList.remove("expanded");
        el.nextElementSibling.nextElementSibling.style.display = "none";
   }

   Array.prototype.forEach.call(nonExpandableMenuItems, function(menuItem, i){
        menuItem.onclick = function() {
            expandedMenu.style.display = "none";
            hamburgerMenu.classList.remove("expanded");
            hideAllMenuItems();
            menuActive = false;   
        }    
   });

   Array.prototype.forEach.call(expandableMenuItems, function(menuItem, i){
       menuItem.onclick = function() {
           if(!this.classList.contains("expanded")) {
               this.firstElementChild.nextElementSibling.innerHTML = "&and;";
               this.classList.add("expanded");
               this.nextElementSibling.nextElementSibling.style.display = "block";
           }
           else {
               hideMenuItem(this);
           }
       }
   });

   hamburgerMenu.onclick = function() {
        if(!menuActive) {
            var rectParentDiv = hamburgerMenu.parentElement.parentElement.getBoundingClientRect();
            expandedMenu.style.top = (rectParentDiv.bottom + window.scrollY) + "px";
            expandedMenu.style.left = "0";
            expandedMenu.style.display = "block";
            hamburgerMenu.classList.add("expanded");
            menuActive = true;
        }
        else {
            expandedMenu.style.display = "none";
            hamburgerMenu.classList.remove("expanded");
            hideAllMenuItems();
            menuActive = false;
        }
   }

   function btnHelperFunction(el,text) {
       if(!el.clicked) {
           el.button.childNodes[1].childNodes[1].classList.remove("fa-plus");
           el.button.childNodes[1].childNodes[1].classList.add("fa-minus");
           el.button.classList.add("btn-highlight");
           text.childNodes[1].style.display = "block";
           el.clicked = true;
       }
       else {
           el.button.childNodes[1].childNodes[1].classList.remove("fa-minus");
           el.button.childNodes[1].childNodes[1].classList.add("fa-plus");
           el.button.classList.remove("btn-highlight");
           text.childNodes[1].style.display = "none";
           el.clicked = false;
       }
   }

   btn_left.onclick = function() {
       var i = (currentBtnIndex-1) < 0 ? quotes.length-1 : currentBtnIndex-1;
       quotes[currentBtnIndex].style.display = "none";
       quotes[i].style.display = "block";
       currentBtnIndex = i;
   }

   btn_right.onclick = function() {
       var i = (currentBtnIndex+1) == quotes.length ? 0 : currentBtnIndex+1;
       quotes[currentBtnIndex].style.display = "none";
       quotes[i].style.display = "block";
       currentBtnIndex = i;
   }

   btn_one.button.onclick = function() {
       btnHelperFunction(btn_one, text_one);
   }

   btn_two.button.onclick = function() {
       btnHelperFunction(btn_two, text_two);
   } 
   btn_three.button.onclick = function() {
       btnHelperFunction(btn_three, text_three);
   }
   btn_four.button.onclick = function() {
       btnHelperFunction(btn_four, text_four);
   }
});