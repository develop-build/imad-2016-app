console.log('Loaded!');


//move the image
var marginLeft = 0;
var image = document.getElementById('image');
function moveRight(){
    marginLeft = marginLeft + 5;
    image.style.marginLeft = marginLeft+'px';
}
image.onclick = function(){
  var interval = setInterval(moveRight,50) ;
};