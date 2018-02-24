import mongoose from "mongoose";
import ConnectionClass from "~/mongo/connectionClass";

class ClearifyDB extends ConnectionClass {
	static async action() {
		await mongoose.connection.db.dropDatabase();
	}
}

ClearifyDB.basicAction();
