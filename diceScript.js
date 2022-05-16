// alert('Working!');
var randomNumb = Math.floor(Math.random()*6)+1;

var imagesource = "dice"+ randomNumb +".png";
var randomImage = "images/" + imagesource;

var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src",randomImage);

var randomNumb2 = Math.floor(Math.random()*6)+1;
var imagesource2 = "dice"+ randomNumb2 +".png";
var randomImage2 = "images/" + imagesource2;

var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src",randomImage2);

if(randomNumb > randomNumb2){
  document.querySelector("h1").innerHTML="🚩 Player 1 wins";
}else if (randomNumb == randomNumb2){
  document.querySelector("h1").innerHTML="Draw!";
}else{
  document.querySelector("h1").innerHTML = "Player 2 wins 🚩"
}
