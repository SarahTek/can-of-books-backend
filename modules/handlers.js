'use strict';


 const BookModel = require('../models/book');

const Handlers = {};

 Handlers.getBooks = async ( request , response, next) => {
   try{
     const books = await BookModel.find({});
     response.status(200).send(books);
    
   }catch(error) {
     console.error(error);
     next(error);
   }
 }

 Handlers.createBook = async ( request, response, next) => {
   try{
    const newBook = await BookModel.create(request.body);
    response.status(201).send(newBook);

   }catch(error){
    console.error(error);
    next(error);
   }
 }
 module.exports = Handlers;
