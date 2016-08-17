var express = require('express')
var app=express();

//express middleware to use redirect all https -> http
//MUST be above LINE app.use(express.static('public'));

app.use(function(req, res, next){
    
    if (req.headers['x-forwarded-proto'] === 'https') {
        console.log('redir')
        res.redirect('http://'+req.hostname+req.url)
    }else{
        next()
        }
})
//
app.use(express.static('public'));

app.listen( process.env.PORT, function(){
    console.log('server up')
})