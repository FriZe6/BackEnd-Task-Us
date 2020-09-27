const express = require('express')
// const {requireAuth}  = require('../../middlewares/requireAuth.middleware')
const { login, signup, update, logout } = require('./auth.controller')

const router = express.Router()

router.post('/login', login)
router.post('/signup', signup)
router.put('/update/:id', update)
router.post('/logout', logout)


module.exports = router