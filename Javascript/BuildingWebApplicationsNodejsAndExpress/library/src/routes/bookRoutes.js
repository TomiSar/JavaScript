const express = require('express');

const bookRouter = express.Router();

function router(nav) {
  const books = [
    {
      title: 'Sinuhe Egyptiläinen',
      genre: 'Fiction',
      author: 'Mika Waltari',
      read: false
    },
    {
      title: 'Tuulikaappimaa',
      genre: 'Comedy Fiction',
      author: 'Jari Tervo',
      read: false
    },
    {
      title: 'War and Peace',
      genre: 'Historical Fiction',
      author: 'Lev Nikolayevich Tolstoy',
      read: false
    },
    {
      title: 'A prisoner of Azkaban',
      genre: 'Fantasy',
      author: 'JK Rowling',
      read: false
    },
    {
      title: 'The wind in the willows',
      genre: 'Fantasy',
      author: 'Kenneth Grahame',
      read: false
    },
    {
      title: 'Life on the misses',
      genre: 'History',
      author: 'Mark Twain',
      read: false
    },
    {
      title: 'Childhood',
      genre: 'Biography',
      author: 'Lev Nikolayevich Tolstoy',
      read: false
    }];

  bookRouter.route('/')
    .get((req, res) => {
      res.render('bookListView',
        {
          nav,
          title: 'Library',
          books
        });
    });

  bookRouter.route('/:id')
    .get((req, res) => {
      const { id } = req.params;
      res.render('bookView',
        {
          nav,
          title: 'Library',
          book: books[id]
        });
    });
  return bookRouter;
}

module.exports = router;
