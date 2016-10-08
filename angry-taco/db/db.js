const databaseName = 'angry-taco'
const connectionString = `postgres://${process.env.USER}@localhost:5432/${databaseName}`
const pgp = require('pg-promise')()
const db = pgp( connectionString )

const selectAllBooks = "SELECT * FROM books LIMIT $1"
const selectBookById = "SELECT * FROM books WHERE id = $1 LIMIT 1"
const selectAuthorByBookId = "SELECT * FROM authors JOIN book_authors ON authors.id = book_authors.author_id WHERE book_authors.book_id = $1 LIMIT 1"
const insertNewBook = "INSERT INTO books( title ) VALUES ( $1 ) RETURNING id"

const selectAllAuthors = "SELECT * FROM authors"
const selectAuthorById = "SELECT * FROM authors WHERE id = $1"

// -------------------------------------------------------

Book = {
  getAll: size => db.any( selectAllBooks, [ size ] ),
  getById: book_id => db.one( selectBookById, [ book_id ] ),
  getAuthor: book_id => db.one( selectAuthorByBookId, [ book_id ]),
  create: book_title => db.one( insertNewBook, [ book_title ] )
}

Author = {
  getAll: size => db.any( selectAllAuthors, [ size ] ),
  getById: author_id => db.one( selectAuthorById, [ author_id ] )
}

module.exports = { Book }
