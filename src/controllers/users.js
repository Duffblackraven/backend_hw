const User = require("../models/users")

const getAllUser = (req, res) => {
    return User.find({}).then((books) => {
        res.status(200).send(books)
    }).catch((error)=> {
        res.status(500).send(error.message)
    })
}
const getUserById = (req, res) => {
    const {book_id} = req.params
    return User.findById(book_id).then((books) => {
        res.status(200).send(books)
    }).catch((error)=> {
        res.status(500).send(error.message)
    })
}
const createUser = (req, res) => {
    const {body} = req
    return User.create({...body}).then((books) => {
        res.status(201).send(books)
    }).catch((error)=> {
        res.status(500).send(error.message)
    })
}
const updateUser = (req, res) => {
    const {book_id} = req.params
    return User.findByIdAndUpdate(book_id).then((books) => {
        res.status(200).send(books)
    }).catch((error)=> {
        res.status(500).send(error.message)
    })
}
const deleteUser = (req, res) => {
    const {book_id} = req.params
    return User.findByIdAndDelete(book_id).then((books) => {
        res.status(200).send(books)
    }).catch((error)=> {
        res.status(500).send(error.message)
    })
}
module.exports = {getAllUser, getUserById, createUser, updateUser, deleteUser}