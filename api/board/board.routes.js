const express = require('express')
const { requireAuth } = require('../../middlewares/requireAuth.middleware')
const { getBoards, getBoard, updateBoard, addBoard, removeBoard } = require('./board.controller')
const router = express.Router()

router.get('/', requireAuth, getBoards)
router.get('/:id', requireAuth, getBoard)
router.put('/:id', requireAuth, updateBoard)
router.post('/', requireAuth, addBoard)
router.delete('/:id', requireAuth, removeBoard)

module.exports = router


