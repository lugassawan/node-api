require("dotenv").config();

exports.app = {
	name: process.env.APP_NAME,
	env: process.env.NODE_ENV,
	key: process.env.APP_KEY,
	debug: process.env.APP_DEBUG,
	url: process.env.APP_URL,
	timezone: "Asia/Jakarta",
	locale: "en"
};
