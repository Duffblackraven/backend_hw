const { getAllBooks, getBookById, createBook, updateBook, deleteBook } = require('../controllers/books')

const router = require('express').Router()
router.get('/books', getAllBooks)
router.get('/books/:book_id', getBookById)
router.post('/books', createBook)
router.put('/books/:book_id', updateBook)
router.delete('/books/:book_id', deleteBook)
module.exports = router