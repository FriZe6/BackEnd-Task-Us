const express = require('express')
const { requireAuth, requireAdmin } = require('../../middlewares/requireAuth.middleware')
const { getBoards, getBoard, updateBoard, addBoard, removeBoard } = require('./board.controller')
const router = express.Router()

router.get('/', getBoards)
router.get('/:id', getBoard)
router.put('/:id', updateBoard)
router.post('/', addBoard)
router.delete('/:id', removeBoard)

module.exports = router


