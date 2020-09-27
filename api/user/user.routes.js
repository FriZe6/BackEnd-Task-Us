const express = require('express')
const { requireAuth } = require('../../middlewares/requireAuth.middleware')
const { getUsers, getUser, addUser, updateUser } = require('./user.controller')
const router = express.Router()

router.get('/', getUsers)
router.get('/:id', getUser)
router.post('/', addUser)
router.put('/:id', requireAuth, updateUser)


module.exports = router

