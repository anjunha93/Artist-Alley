

module.exports = function (sequelize, DataTypes) {
	var Idea = sequelize.define("Idea", {
		user_name: {
			type: DataTypes.STRING,
		},

		title: {
			type: DataTypes.STRING,
			notEmpty: true
			
		},
		subject: {
			type: DataTypes.STRING,
			notEmpty: true
			
		}
	});

	Idea.associate = function(models) {
	    Idea.belongsTo(models.User)
	};


	return Idea
};