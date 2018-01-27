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
		var subject = req.idea.subject;
		res.render("aboutUs", {subject:  subject});
  });
  
  app.get("/post", function(req, res) {
		var title = req.idea.title;
		res.render("aboutUs", {title:  title});
  });
  
};