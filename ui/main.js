//Counter Code

var button = document.getElementById('counter');
var counter = 0;
button.click=function(){
    //make request to counter endpoint
    
    //capture response to counter endpoint
    
    //render the value in correct span
    counter = counter + 1;
    var span = document.getElementById('count');
    span.innerHTML = counter.toString();
};