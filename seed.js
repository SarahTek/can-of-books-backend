'use strict';


require('dotenv').config();
const mongoose = require('mongoose');
mongoose.connect(process.env.DATABASE_URL);
const BookModel = require('./models/book');


async function seedBooks() {
  console.log('seeding books...');

  await BookModel.create({
    title: 'How Far You Have Come',
    description: 'exquisite collection of poetry and essays from best-selling artist and writer Morgan Harper Nichols. In the midst of the hurt and the mundane, the questions and the not yets, you can forget just how far you have come. Morgan weaves together personal reflections with her signature poems, encouraging you to reclaim moments of brokenness, division, and pain and re-envision them as experiences of reconciliation, unity, and hope',
    status: '100 Stars'
  });

  await BookModel.create({
    title: 'You Can Heal Your Life',
    description: 'how limiting beliefs and ideas are often the cause of illness, and how you can change your thinking…and improve the quality of your life.',
    status: 'LIFE-CHANGING'
  });

  await BookModel.create({
    title: 'How To Be Alone',
    description: 'A must-read for anyone whose childhood still feels unresolved, who spends more time pretending to have friends online than feeling close to anyone in real life, who tries to have genuine, deep conversations in a roomful of people who would rather you not. Above all, it is an audiobook for anyone who desperately wants to feel less alone and a little more connected through listening to her words. ',
    status: 'FAVOURITE FIVE'
  });

  mongoose.disconnect();

  console.log('done seeding books...');
  
};

seedBooks();
