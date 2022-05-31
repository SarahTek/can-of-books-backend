'use strict';
const mongoose = require('mongoose');
mongoose.connect(process.env.DATABASE_URL);
require('dotenv').config();


const Book = require('./Modules/book');

async function seed() {
  const myBook = new Book({
    title: 'You Can Heal your life',
    description: 'how limiting beliefs and ideas are often the cause of illness, and how you can change your thinking…and improve the quality of your life.',
    status: '4.7 stars',
  });
  myBook.save(function (error) {
    if (error) console.error(error);
    else console.log('saved first book!');
  });

  await Book.create({
    title: 'the note book',
    description: 'how limiting beliefs and ideas are often the cause of illness, and how you can change your thinking…and improve the quality of your life.',
    status: '4.7 stars',
  });
  console.log('saved second book');

  await Book.create({
    title: 'the note book',
    description: 'how limiting beliefs and ideas are often the cause of illness, and how you can change your thinking…and improve the quality of your life.',
    status: '4.7 stars',
  });

  console.log('saved third book');
  mongoose.disconnect();

}
seed();
