"use strict";
module.exports = (sequelize, DataTypes) => {
	const Admin = sequelize.define(
		"admins",
		{
			email: { type: DataTypes.STRING, allowNull: false, unique: true },
			email_verified_at: DataTypes.DATE,
			phone: { type: DataTypes.INTEGER, allowNull: false, unique: true },
			phone_verified_at: DataTypes.DATE,
			password: { type: DataTypes.STRING, allowNull: false },
			created_at: {
				type: DataTypes.DATE,
				allowNull: false,
				defaultValue: sequelize.literal("CURRENT_TIMESTAMP(3)")
			},
			update_at: {
				type: DataTypes.DATE,
				allowNull: false,
				defaultValue: sequelize.literal(
					"CURRENT_TIMESTAMP(3) ON UPDATE CURRENT_TIMESTAMP(3)"
				)
			}
		},
		{}
	);
	Admin.associate = function(models) {
		// associations can be defined here
	};
	return Admin;
};
