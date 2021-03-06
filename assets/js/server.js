//require packages
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

var app = express();
var port = 1865;
//create servers
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//store new reservations in an array
var reservations = [];
var tables =[];
var waitlist =[];


//accept path requests and direct to relevant html files (routes)
app.get("/", function(req,res){
	console.log("You hit the root");
	res.sendFile(path.join(__dirname, "../../index.html"));


});
app.get("/view", function(req,res){
	res.sendFile(path.join(__dirname, "../../view.html"));
});
app.get("/reserve", function(req,res){
	res.sendFile(path.join(__dirname, "../../reserve.html"));
});
//accept api requests and return relevant json
	//if POST api request, push new reservation to array
	app.post("/api/:reservation?", function(req,res){
		var reservation = req.params.reservation;
		if(reservation==="tables"){
			//get json info for everyone who has a table
			return req.json(tables);
		}

		else if(reservation==="waitlist"){
			//get json for waitlist
			return req.json(waitlist);
		}

		var newReservation = req.body;
		return res.status(201).json(newReservation);
		
	})




app.listen(port, function(){
	console.log("Not ready are you");
})