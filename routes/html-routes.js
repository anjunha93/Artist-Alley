// *********************************************************************************
// html-routes.js - this file offers a set of routes for sending users to the various html pages
// *********************************************************************************

// Dependencies
// =============================================================
var path = require("path");
var db = require("../models");

// Routes
// =============================================================
module.exports = function(app) {
  //index route loads view.html
  	app.get("/", function(req, res) {
		res.render("index")
	})

	app.get("/register", function(req, res) {

		res.render("register")
	});


	app.get("/post", function(req, res) {
		var username = req.user.username;
		res.render("createNewPost", {username:  username});
	});

	app.get("/about", function(req, res) {
		var username = req.user.username;
		res.render("aboutUs", {username:  username});
	});	
};
