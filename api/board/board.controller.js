const boardService = require("./board.service");

// GET LIST
async function getBoards(req, res) {
    const boards = await boardService.query()
    res.json(boards)
}
// GET SINGLE
async function getBoard(req, res) {
    const board = await boardService.getById(req.params.id)
    res.json(board)
}
// DELETE
async function removeBoard(req, res) {
    await boardService.remove(req.params.id)
    res.end()
}
// CREATE
async function addBoard(req, res) {
    const board = await boardService.add(req.body)
    res.json(board)
}

// UPDATE
async function updateBoard(req, res) {
    await boardService.update(req.body)
    res.send('updated successfuly')
}


module.exports = {
    getBoards,
    getBoard,
    addBoard,
    updateBoard,
    removeBoard
}
 