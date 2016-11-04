var express = require('express');
var bodyParser = require('body-parser');

const PORT = 3000;
var app = express();
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/', express.static(__dirname + '/public'));
app.engine('html', require('atpl').__express);

app.set('view engine','html');




// listen in the port
app.listen(PORT, function(){
    console.log('Ready: http://localhost:'+PORT+'/');
});
