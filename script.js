document.body.onload = addElement;

var essayCardArray;
var bioCardArray;
var storiesCardArray;
var filmCardArray;


document.getElementById("essays").onclick = function(){
    document.getElementsByClassName("essayPosts").visibility = "visible";
}
document.getElementById("film").onclick = function(){
    document.getElementsByClassName("filmPosts").visibility = "visible";
}


for (let i = 0; i < essayCardArray.length; i++){
  function updateEssayGallery(){
  document.getElementsByClassName("essayPosts").innerHTML = essayCardArray[i];
  }
}

function createNewCard(section){
  var newCard = document.createElement("div");
  var thumbnail = document.createElement(image);
  var excerpt;
  newCard.appendChild(thumbnail);
  newCard.appendChild(excerpt);
  section.add(newCard)
  }

