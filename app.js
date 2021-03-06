var express = require('express');
var http = require('http');
var path = require('path');
//var task = require('./server/routes/task');

var app = express();

var clientDir = path.join(__dirname, 'client');

// all environments
app.set('port', process.env.PORT || 3000);
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(app.router);
app.use(express.static(clientDir));

// development only
if ('development' == app.get('env')) {
    app.use(express.errorHandler());
}

app.get('/', function(req, res) {
  res.sendfile(path.join(clientDir, 'index.html'))
});

app.get('/items/list', function(req, res) {
    res.send(
        [
            {name: "one"},
            {name: "two"},
            {name: "three"},
            {name: "four"},
            {name: "five"}
        ]
    )
})

app.get('/employee/:empid', function(req, res) {
    res.send(
        [
            {name: "emp1"},
            {name: "emp2"},
            {name: "emp3"},
            {name: "emp4"},
            {name: "emp5"}
        ]
    )
})


//app.get('/tasks', task.list)


http.createServer(app).listen(app.get('port'), function(){
    console.log('Server listening - http://localhost: ' + app.get('port'));
});
