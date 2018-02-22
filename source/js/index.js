import mongoose from "mongoose";

class Main {
	static async init() {
		try {
			await mongoose.connect(`mongodb://localhost/mongodb-intro`);
			global.console.log("MongoDB connected");
		} catch (e) {
			global.console.error(e);
		}
	}
}

Main.init();
