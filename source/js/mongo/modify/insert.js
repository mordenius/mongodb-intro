import ConnectionClass from "~/mongo/connectionClass";
import Author from "~/mongo/models/Author.model";

class InitialDB extends ConnectionClass {
	static async action() {

		// insert one doc
		await Author.create({
			name: "Howard Lovecraft"
		});

		// insert many docs
		const authorList = [
			{ name: "Phillip K. Dick" },
			{ name: "Jack Finney" },
			{ name: "Shakespeare" }
		];

		await Author.collection.insert(authorList);
	}
}

InitialDB.basicAction();
