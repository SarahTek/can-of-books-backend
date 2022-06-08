'use strict';

require('dotenv').config();
const express = require('express');
const cors = require('cors');
const Handler = require('./modules/handlers');


const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 3002;

const mongoose = require('mongoose');
mongoose.connect(process.env.DATABASE_URL);

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
  console.log('Mongoose is connected')
});

app.get('/books', Handler.getBooks);
app.post('/books', Handler.createBook)
app.delete('./books/:id',Handler.deleteBook);
app.put('./books/:id',Handler.updateBook);

app.get('/test', (request, response) => {
  response.send('test request received');
});

app.use((error, request, response, next) => {
  response.status(500).send(`call the devs!... ${error.message}`);
});

app.listen(PORT, () => console.log(`listening on ${PORT}`));
