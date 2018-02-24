import ConnectionClass from "~/mongo/connectionClass";
import Author from "~/mongo/models/Author.model";

class InitialDB extends ConnectionClass {
	static async action() {
		await Author.create({
			name: "Howard Lovecraft"
		});

		await Author.create({
			name: "Phillip K. Dick"
		});

		await Author.create({
			name: "Jack Finney"
		});

		await Author.create({
			name: "Shakespeare"
		});
	}
}

InitialDB.basicAction();