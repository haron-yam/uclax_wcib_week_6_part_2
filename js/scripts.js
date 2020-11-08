console.log('Hello from js/scripts.js!');


//const buttonConstand = document.getElementById('buttonUpdate')


//create array of all my pictures
var imgs = ['images/peach.jpg','images/blackberry.jpg','images/grapefruit.jpg','images/watermelon.jpg', 'images/cherrylime.jpg'];
var colors = ['orange', 'purple', 'red', 'green', 'lime'];
//set variable marking the location of where I am going to do my picture's function using the element ID
var imgContainer = document.getElementById('imageContainer');

var clicker = document.getElementById('overlayTest');

var currentImageIdx=0;


var img = new Image();
img.src = imgs[currentImageIdx];
imgContainer.appendChild(img);
document.getElementById("overlayTest").style.backgroundColor=colors[currentImageIdx];

clicker.addEventListener('click', function loadPic(){

  currentImageIdx=(currentImageIdx+1)%(imgs.length);
  var updatedImg = new Image();
  updatedImg.src=imgs[currentImageIdx];
  var imgOld=document.getElementById("imageContainer");//.childNodes[0];
  //console.log(currentImageIdx);

  document.getElementById("overlayTest").style.backgroundColor=colors[currentImageIdx];
  imgContainer.replaceChild(updatedImg, imgOld.childNodes[0]);
});
