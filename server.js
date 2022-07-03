const express = require('express');
const app = express();

app.use(express.static(__dirname + '/dist/angular-todo-oblakogroup/'));
app.get('/*', function(req,res) {
    res.sendFile(__dirname+'/dist/angular-todo-oblakogroup/index.html');
});
app.listen(process.env.PORT || 8080);