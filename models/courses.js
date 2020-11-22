const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const courseSchema = new Schema({
    id: { type: String, required: true, unique: true },
    name: { type: String, required: true},
    length: { type: Number, required: true},
    actions: [
        {
            id: { type: String, required: true }
        }
    ],
    logo:{ type: String, required: true,default:"无" },
    info:{ type: String, required: true,default:"无" }
});

module.exports = mongoose.model('courses', courseSchema);