const mongoose = require('mongoose');
const { Schema } = mongoose;

const taskSchema = new Schema({
    name: { type: String, required: true },
    body: { type: String, required: true, unique: true },
    user: {type: Schema.Types.ObjectId, ref: "User"}
}, {timestamps: true});

const userData = mongoose.model('userData', taskSchema);

module.exports = userData;