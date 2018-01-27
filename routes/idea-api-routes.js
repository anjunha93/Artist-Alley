// Dependencies
// =============================================================

var db = require("../models");

// Routes
// =============================================================
module.exports = function(app) {
  //index route loads view.html
  app.post("/api/newIdea", function(req, res) {

    db.Idea.create(req.body).then(function(results){
      res.json(results);
    });
  });

  app.get("/post", function(req, res) {
		var subject = req.user.subject;
		res.render("home", {subject:  subject});
  });
  
  app.get("/post", function(req, res) {
		var title = req.user.title;
		res.render("home", {title:  title});
  });
  
};