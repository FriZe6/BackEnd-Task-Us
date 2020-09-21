const express = require('express')
const { requireAuth, requireAdmin } = require('../../middlewares/requireAuth.middleware')
const { getUsers, getUser, addUser, updateUser } = require('./user.controller')
const router = express.Router()

//TODO: add a way to remove user?
router.get('/', getUsers)
router.get('/:id', getUser)
router.post('/', addUser)
router.put('/', requireAuth, updateUser)


module.exports = router

