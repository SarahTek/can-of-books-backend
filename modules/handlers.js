'use strict';


const BookModel = require('../models/book');

const Handlers = {};

Handlers.getBooks = async (request, response, next) => {
  try {
    const books = await BookModel.find({});
    response.status(200).send(books);

  } catch (error) {
    console.error(error);
    next(error);
  }
}

Handlers.createBook = async (request, response, next) => {
  try {
    const newBook = await BookModel.create(request.body);
    response.status(201).send(newBook);

  } catch (error) {
    error.customMessage = 'something went wrong when creating a book: ';
    console.error(error.customMessage + error);
    next(error);
  }
}

Handlers.deleteBook = async (request, response, next) => {
  try {
    await BookModel.findByIdAndDelete(request.params.id);
    response.status(204);

  } catch (error) {
    error.customMessage = 'something went wrong when deleting a book: ';
    console.error(error.customMessage + error);
    next(error);
  }
}


Handlers.updateBook = async (request, response, next) => {
  console.log(response.body);
  try {
    const updatedBook = await BookModel.findByIdAndUpdate(request.params.id, request.body, { new: true });
    response.status(200).send(updatedBook);

  } catch (error) {
    error.customMessage = 'something went wrong when updating a book: ';
    console.error(error.customMessage + error);
    next(error);
  }
}




module.exports = Handlers;
