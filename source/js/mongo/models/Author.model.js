import mongoose from "mongoose";

const { Schema } = mongoose;

const AuthorSchema = new Schema({
	name: String
})

export default mongoose.model("Author", AuthorSchema);