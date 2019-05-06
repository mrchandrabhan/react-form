const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let form = new Schema({
    form_description: {
        type: String
    },
    form_responsible: {
        type: String
    },
    form_priority: {
        type: String
    },
    form_completed: {
        type: Boolean
    }
});

module.exports = mongoose.model('form', form);