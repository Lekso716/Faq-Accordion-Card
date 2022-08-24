var acc = document.getElementsByClassName("accordion");
var i;
var option = document.getElementsByClassName("options");
var arrow = document.getElementsByClassName("arrow");
var angle = 0;
var test = document.getElementsByClassName("test");
var panel = document.getElementsByClassName("panel");

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function(event) {
    let active = document.getElementsByClassName("active")[0];
    event.target.classList.contains("test");
    
    if(active && event.target.tagName !== "P" ){
      active.classList.remove("active");
    }  
    this.classList.add("active");
    if(active == this && event.target.tagName !== "P"){
      active.classList.remove("active");
      
    }
    
  });
}

//  "13px 'Outfit', sans-serif";


