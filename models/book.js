'use strict';
const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
  title: {type: String, required: true},
  description: {type: String, required: true},
  status: {type: String, uppercase: true, enum: ['LIFE-CHANGING', 'FAVOURITE FIVE', 'RECOMMENDED TO ME', 'POETRY', 'ROMANTIC NOVEL'] },
  email: {type: String, required: true}
});


const bookModel = mongoose.model('book', bookSchema);

module.exports = bookModel;
