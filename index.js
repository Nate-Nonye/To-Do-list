var InnerHTML = document.querySelector(".adder");
document.addEventListener("keypress", function(event){
   // InnerHTML.innerHTML += event.key
   var pressed = event.key;
   switch (pressed) {
      case "Enter": handclick()
         break;
   
      default:  InnerHTML.innerHTML += event.key 
         break;
   }
});

document.querySelector(".add").addEventListener("click", function(){document.querySelector(".list").innerHTML += "<li>" + InnerHTML.innerHTML + '<input type="checkbox">' + "</li>"})
document.querySelector(".clearall").addEventListener("click", function(){document.querySelector(".list").innerHTML = " "})
document.querySelector(".clear").addEventListener("click", function(){document.querySelector(".adder").innerHTML = " "})
document.querySelector(".delete").addEventListener("click", function(){ var first = InnerHTML.innerHTML.length
   var second = first - 1
 var newstuff = InnerHTML.innerHTML.slice(0,second)
 InnerHTML.innerHTML = newstuff;
 });
//  document.querySelector(".submit").addEventListener("click", function(){
// var fulllist =  document.querySelector(".list").innerHTML;
//  });
 document.querySelector(".return").addEventListener("click", function(){
   document.querySelector(".list").innerHTML = InnerHTML.innerHTML
    })
    

function handclick(){document.querySelector(".list").innerHTML += "<li>" + InnerHTML.innerHTML + '<input type="checkbox">' + "</li>"}
// function shoot(){
// //    var first = InnerHTML.innerHTML.length
// //    var second = first - 1
// //  var newstuff = InnerHTML.innerHTML.slice(0,second)
// //  InnerHTML.innerHTML = newstuff;
// //  };