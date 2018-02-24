import mongoose from "mongoose";

export default class ConnectionClass {
	static async basicAction() {
		try {
			await ConnectionClass.connect();
			await ConnectionClass.action();
			await ConnectionClass.disconnect();

			global.console.log("MongoDB: `mongodb-intro` database is initialized");
		} catch (e) {
			global.console.error(e);
		}
	}

	static async action() {
		// inheritance method
	}

	static async connect() {
		await mongoose.connect(`mongodb://localhost/mongodb-intro`);
	}

	static async disconnect() {
		await mongoose.connection.close();
	}
}