var letters = document.getElementByClassName = ('letter');



document.onreadystatechange = function() {
  if (document.readyState === "interactive") {
    
    for (i = 0; i < letters.length; i++) {
      letters[i].addEventListener("click", letterSelect);
    }
    
  }
};

function letterSelect(){

}
