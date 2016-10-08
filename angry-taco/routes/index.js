const express = require( 'express' )
const router = express.Router()
const { Book } = require( '../db/db.js' )

/* GET home page. */
router.get( '/', ( request, response ) => {
  Book.getAll( 5 ).then( books =>
    response.render( 'index', { title: 'Test', message: 'trying', books } ) )
})

router.get( '/book/:book_id', ( request, response ) => {
  const { book_id } = request.params
  // Promise.all([ Book.getById( book_id ), Book.getAuthor( book_id ) ])
  // .then( data => { const [ book, author ] = data
  // response.render( 'book-details', { book, author } )
  // })

  Book.getById( book_id ).then( book => {
    response.render( 'book-details', { book } )
  } )

})

router.get( '/add/book', ( request, response ) => {
  response.render( 'add-book' )
} )

router.post( '/add/book', ( request, response ) => {
  const { title, author } = request.body
  Book.create( title ).then( book => {
    const book_id = book.id

    response.redirect( `/book/${book_id}` )
  })
})

module.exports = router
