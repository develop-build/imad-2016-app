//Counter Code

var button = document.getElementById('counter');

button.onclick=function(){
    //create new request
    var request = new XMLHttpRequest();
    //capture response to counter endpoint
    request.onreadystatechange=function(){
        if(request.readyState === XMLHttpRequest.DONE){
            if(request.status === 200){
                var counter = request.responseText;
                var span = document.getElementById('count');
                span.innerHTML = counter.toString();
            }
        }
    };
    //Make Request
    request.open('GET','http://develop-build.imad.hasura-app.io/counter',true);
    request.send(null);
  
};

// submit request
var nameInput = document.getElementById('name');
var name = nameInput.value;
var submit = document.getElementById('submit-btn');
submit.onclick = function(){
    //make request to server and send the name
    //caputure the list of names and render it as list
    var names = ['name1','name2','name3','name4'];
    var list = '';
    for (var i = 0 ; i < names.length; i++){
        namelist +='<li>'+names[i]+'</li>';
    }
    var ul =document.getElementById('list');
    ul.innerHTML=list;
};