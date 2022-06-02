'use strict';

 const BookModel = require('../models/book');

 async function getBooks( request , response, next) {
   try{
     const books = await BookModel.find({});
     response.status(200).send(books);
    
   }catch {
     console.error(error);
     next(error);
   }
 }
 module.exports = getBooks;
