const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Search = new Schema({
    item: {
        type: String,
	trim: true
    },
    created_at: {
        type: Date,
        default: Date.now
    },
    updated_at: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Search', Search);
