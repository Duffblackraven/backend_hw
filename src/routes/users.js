const { getAllUser, getUserById, createUser, updateUser, deleteUser } = require('../controllers/users')

const router = require('express').Router()
router.get('/users', getAllUser)
router.get('/users/:user_id', getUserById)
router.post('/users', createUser)
router.put('/users/:user_id', updateUser)
router.delete('/users/:user_id', deleteUser)
module.exports = router