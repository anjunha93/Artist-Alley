// Dependencies
// =============================================================

var db = require("../models");

// Routes
// =============================================================
module.exports = function(app) {
  //index route loads view.html

	app.get("/api/ideas/:user?", function(req, res) {
		console.log(req.body)
		if(req.params.user){
			var user = req.params.user;

				// this code finds all data from the data table and sends the information back as a JSON object
				db.Idea.findAll({ 
					where: { user_name: user }
				})
				.then(function(data){
					res.json(data);
				});
		}
	});
};