var express = require('express');
var bodyParser = require('body-parser');

const PORT = 3000;
var app = express();
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/', express.static(__dirname + '/assets'));
app.engine('html', require('atpl').__express);

app.set('view engine','html');

<<<<<<< HEAD
=======

>>>>>>> 01406ee12c381582d22bce654737ecdab6112d2d
// listen
app.listen(PORT, function(){
    console.log('Ready: http://localhost:'+PORT+'/');
});
