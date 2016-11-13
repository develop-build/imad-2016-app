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

//