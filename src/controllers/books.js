const Book = require("../models/books")

const getAllBooks = (req, res) => {
    return Book.find({}).then((books) => {
        res.status(200).send(books)
    }).catch((error)=> {
        res.status(500).send(error.message)
    })
}
const getBookById = (req, res) => {
    const {book_id} = req.params
    return Book.findById(book_id).then((books) => {
        res.status(200).send(books)
    }).catch((error)=> {
        res.status(500).send(error.message)
    })
}
const createBook = (req, res) => {
    const {body} = req
    return Book.create({...body}).then((books) => {
        res.status(201).send(books)
    }).catch((error)=> {
        res.status(500).send(error.message)
    })
}
const updateBook = (req, res) => {
    const {book_id} = req.params
    return Book.findByIdAndUpdate(book_id).then((books) => {
        res.status(200).send(books)
    }).catch((error)=> {
        res.status(500).send(error.message)
    })
}
const deleteBook = (req, res) => {
    const {book_id} = req.params
    return Book.findByIdAndDelete(book_id).then((books) => {
        res.status(200).send(books)
    }).catch((error)=> {
        res.status(500).send(error.message)
    })
}
module.exports = {getAllBooks, getBookById, createBook, updateBook, deleteBook}