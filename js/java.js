let span = document.querySelector(".up");

window.onscroll = function () {
  console.log(this.scrollY);
  if (this.scrollY >= 70) {
    span.classList.add("show");
  } else {
    span.classList.remove("show");
  }

};


span.onclick=function()
{
  window.scrollTo
  (
    {
      top:0,
      behavior:"smooth",
    }
  );
}

// ==============================================

var moonI = document.querySelector('.moon-icon');
var sunI = document.querySelector('.sun-icon');


var link = document.querySelector('#dark-mood');



moonI.addEventListener('click',()=>{
  link.setAttribute("href","css/mood.css")
  localStorage.setItem('dark-mode',"css/mood.css")
})

if (localStorage.getItem('dark-mode')){
  link.setAttribute('href',"css/mood.css")
}



sunI.addEventListener('click',()=>{
  link.setAttribute("href","css/style.css")
  localStorage.removeItem('dark-mode')
}
)
// ==========================================================
var btnText = document.getElementById("myBtn");
function myFunction() {
  var x = document.getElementById("myDIV");
  if (x.style.display === "none") {
    x.style.display = "flex";
   btnText.innerHTML = "show less";
  } else {
    x.style.display = "none";
    btnText.innerHTML = "show more";
    
  }
}
// ==============================================================
var first = document.querySelector('.tt');
var second = document.querySelector('.bb');
var third = document.querySelector('.comment');
var form = document.querySelector('.form')


third.disabled = true;


form.onchange = function () {
  if (first.value == "none" || second.value == "none") {
    third.setAttribute("disabled", true);
  } else {
    third.removeAttribute("disabled");
}}
