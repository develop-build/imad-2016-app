var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articles = {
    'article-one' : {
    title:'Article One | Anubhav',
    heading:'Article One',
    date : 'Sep 5 2016',
    content : `<p>
                    This content to first article.This content to first article.This content to first article.This content to first article.This content to first article.This content to first article.This content to first article.This content to first article.This content to first article.This content to first article.This content to first article.This content to first article.This content to first article.This content to first article.This content to first article.
                </p>
                <p>
                    This content to first article.This content to first article.This content to first article.This content to first article.This content to first article.This content to first article.This content to first article.This content to first article.This content to first article.This content to first article.This content to first article.This content to first article.This content to first article.This content to first article.This content to first article.
                </p>
                <p>
                    This content to first article.This content to first article.This content to first article.This content to first article.This content to first article.This content to first article.This content to first article.This content to first article.This content to first article.This content to first article.This content to first article.This content to first article.This content to first article.This content to first article.This content to first article.
                </p>`
},
    'article-two' :{
        title:'Article Two | Anubhav',
        heading:'Article Two',
        date : 'Sep 10 2016',
        content :`<p>
                    This content to second article.This content to second article..
                </p>`
    },
    'article-three':{
        title:'Article Three | Anubhav',
        heading:'Article Three',
        date : 'Sep 12 2016',
        content :`<p>
                    This content to third article.This content to third article..
                </p>`
    }
};
function createTemplate(data){
    var title = data.title;
    var date = data.date;
    var heading = data.heading;
    var content = data.content;
    
    
    var htmlTemplate = 
    `<!doctype html>
        <html>
            <head>
                <title>${title}</title>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <link href="/ui/style.css" rel="stylesheet" />
            </head>
            <body>
                <div class="container">
                    <div>
                        <a href="/">Home</a>
                    </div>
                    <hr>
                    <h3>${heading}</h3>
                    <div>
                        ${date}
                    </div>
                    <div>
                        ${content}
                    </div>
                </div>
            </body>
        </html>
        `;
        return(htmlTemplate);
}


app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/:articleName',function(req,res){
    var articleName = req.params.articleName;
    res.send(createTemplate(articles[articleName])); 
});


app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});

app.get('/ui/anuDP.jpg', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'anuDP.jpg'));
});



var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
