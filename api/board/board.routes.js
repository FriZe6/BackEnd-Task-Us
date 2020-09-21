const express = require('express')
const { requireAuth, requireAdmin } = require('../../middlewares/requireAuth.middleware')
const { getBoards, getBoard, updateBoard, addBoard, removeBoard } = require('./board.controller')
const router = express.Router()

router.get('/', getBoards)
router.get('/:id', getBoard)
router.put('/:id', requireAuth, updateBoard)
router.post('/', requireAuth, requireAdmin, addBoard)
router.delete('/:id', requireAuth, requireAdmin, removeBoard)

module.exports = router


