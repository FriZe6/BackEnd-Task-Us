const boardService = require("./board.service");

// GET LIST
async function getBoards(req, res) {
    const boards = await boardService.query()
    res.send(boards)
}
// GET SINGLE
async function getBoard(req, res) {
    const board = await boardService.getById(req.params.id)
    res.send(board)
}
// DELETE
async function removeBoard(req, res) {
    await boardService.remove(req.params.id)
    res.end()
}
// CREATE
async function addBoard(req, res) {
    const board = await boardService.add(req.body)
    res.send(board)
}

// UPDATE
async function updateBoard(req, res) {
    console.log('----------', req.body, '------------');
    console.log('----------', req.body.groups[0].tasks[0], '------------');
    console.log('before accessing the service');
    const board = await boardService.update(req.body)
    console.log('after accessing the service, got:', board);
    res.send('updated successfuly')
}


module.exports = {
    getBoards,
    getBoard,
    addBoard,
    updateBoard,
    removeBoard
}
