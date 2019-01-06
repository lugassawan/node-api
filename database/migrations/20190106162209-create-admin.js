"use strict";
module.exports = {
	up: (queryInterface, Sequelize) => {
		return queryInterface.createTable("admins", {
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: Sequelize.INTEGER
			},
			email: {
				allowNull: false,
				type: Sequelize.STRING,
				unique: true
			},
			email_verified_at: {
				type: Sequelize.DATE
			},
			phone: {
				allowNull: false,
				type: Sequelize.STRING(15),
				unique: true
			},
			phone_verified_at: {
				type: Sequelize.DATE
			},
			password: {
				allowNull: false,
				type: Sequelize.STRING
			},
			created_at: {
				allowNull: false,
				type: Sequelize.DATE
			},
			updated_at: {
				allowNull: false,
				type: Sequelize.DATE
			}
		});
	},
	down: (queryInterface, Sequelize) => {
		return queryInterface.dropTable("admins");
	}
};
