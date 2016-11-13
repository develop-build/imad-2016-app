console.log('Loaded!');


//move the image
var marginLeft = 0;
var image = document.getElementById('image');
function moveRight(){
    marginLeft = marginLeft + 10;
    image.style.marginLeft = marginLeft+'px';
}
image.onclick = function(){
  var interval = setInterval(moveRight,100) ;
};