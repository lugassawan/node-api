"use strict";

module.exports = {
	up: (queryInterface, Sequelize) => {
		return queryInterface.bulkInsert(
			"admins",
			[
				{
					email: "admin@nodeapi.com",
					phone: "087712345678",
					password: "coba12345",
					created_at: new Date(new Date().toGMTString() + "-7"),
					updated_at: new Date(new Date().toGMTString() + "-7")
				}
			],
			{}
		);
	},

	down: (queryInterface, Sequelize) => {
		return queryInterface.bulkDelete("admins", null, {});
	}
};
