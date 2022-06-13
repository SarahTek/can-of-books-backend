'use strict';
const BookModel = require('../models/book');
const Handlers = {};

Handlers.getBooks = async (request, response, next) => {
  console.log(request.user.email);
  try {
    const books = await BookModel.find({ email: request.user.email });
    response.status(200).send(books);

  } catch (error) {
    console.error(error);
    next(error);
  }
}

Handlers.createBook = async (request, response, next) => {
  try {
    const newBook = await BookModel.create({...request.body, email: request.user.email } );
    response.status(201).send(newBook);

  } catch (error) {
    error.customMessage = 'something went wrong when creating a book: ';
    console.error(error.customMessage + error);
    next(error);
  }
}

Handlers.deleteBook = async (request, response, next) => {
  try {
    const bookToBeDeleted = await BookModel.findOne({ _id: request.params.id, email: request.user.email });
    if (!bookToBeDeleted) {
      response.status(404).send('unable to find that book to be deleted');
    }else {
      await BookModel.findByIdAndDelete(request.params.id);
      response.status(204);
    }

  } catch (error) {
    error.customMessage = 'something went wrong when deleting a book: ';
    console.error(error.customMessage + error);
    next(error);
  }
}


Handlers.updateBook = async (request, response, next) => {
  console.log(response.body);
  try {
    const bookToBeUpdated = await BookModel.findOne({ _id: request.params.id, email: request.user.email });
    if (!bookToBeUpdated) {
      response.status(404).send('unable to find that book to be updated');
  }else{
    const updatedBook = await BookModel.findByIdAndUpdate(request.params.id, {...request.body, email: request.user.email}, { new: true });
    response.status(200).send(updatedBook);
    }
  } catch (error) {
    error.customMessage = 'something went wrong when updating a book: ';
    console.error(error.customMessage + error);
    next(error);
  }
}

Handlers.handleGetUser = async (req, res) => {
  console.log('Getting the user');
  res.send(req.user);
};

module.exports = Handlers;
