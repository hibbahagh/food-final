var pasta = document.querySelector(".pasta");
var pizza = document.querySelector(".pizza");
var soups = document.querySelector(".soups");
var salads = document.querySelector(".salads");
var burgers = document.querySelector(".burgers");
var sandwiches = document.querySelector(".sandwiches");
var iceCream = document.querySelector(".ice-cream");
var seafood = document.querySelector(".seafood");
var breakfast = document.querySelector(".breakfast");
var steak = document.querySelector(".steak");
var tacos = document.querySelector(".tacos");

var pasta2 = document.querySelector(".pasta2");
var pizza2 = document.querySelector(".pizza2");
var soups2 = document.querySelector(".soups2");
var salads2 = document.querySelector(".salads2");
var burgers2 = document.querySelector(".burgers2");
var sandwiches2 = document.querySelector(".sandwiches2");
var iceCream2 = document.querySelector(".IceCream2");
var seafood2 = document.querySelector(".seafood2");
var breakfast2 = document.querySelector(".breakfast2");
var steak2 = document.querySelector(".steak2");
var tacos2 = document.querySelector(".Tacos2");
var btn = $(".btn")

btn.on("click", myFood)

function myFood(event){
  event.preventDefault()

if (pasta.checked == true) {
pasta2.style.visibility ="visible";
   } else {
     pasta2.style.visibility ="hidden";
   }

if (pizza.checked == true) {
    pizza2.style.visibility ="visible";
   } else {
    pizza2.style.visibility ="hidden";
   }

  if (soups.checked == true) {
      soups2.style.visibility ="visible";
   } else {
     soups2.style.visibility ="hidden";
   }
//
  if (salads.checked == true) {
    salads2.style.visibility ="visible";
 } else {
   salads2.style.visibility ="hidden";
 }

    if (burgers.checked == true) {
      burgers2.style.visibility ="visible";
   } else {
     burgers2.style.visibility ="hidden";
   }

if (sandwiches.checked == true) {
  sandwiches2.style.visibility ="visible";
} else {
 sandwiches2.style.visibility ="hidden";
}

if (iceCream.checked == true) {
  iceCream2.style.visibility ="visible";
} else {
 iceCream2.style.visibility ="hidden";
}

  if (seafood.checked == true) {
    seafood2.style.visibility ="visible";
 } else {
   seafood2.style.visibility ="hidden";
 }

if (breakfast.checked == true) {
  breakfast2.style.visibility ="visible";
} else {
 breakfast2.style.visibility ="hidden";
}

if (steak.checked == true) {
  steak2.style.visibility ="visible";
   } else {
     steak2.style.visibility ="hidden";
   }

if (tacos.checked == true) {
  tacos2.style.visibility ="visible";
} else {
 tacos2.style.visibility ="hidden";
}
}
