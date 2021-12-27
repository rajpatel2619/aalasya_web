var express = require('express');
var app = express();


app.get('/',(req,res)=>{
	res.send("hello buddy!");
});


app.listen(9090,()=>{
console.log("server started at 9090")	
});