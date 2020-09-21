module.exports = connectSockets

function connectSockets(io) {
    //TODO: Complete Overhaul
    //TODO: Complete Overhaul
    //TODO: Complete Overhaul
    io.on('connection', socket => {

        socket.on('board', boardId => {
            if (socket.board) {
                socket.leave(socket.boardId)
            }
            socket.join(boardId)
            socket.board = boardId;
        })
        socket.on('updateBoard', board => {
            socket.to(socket.board).emit('updatedBoard', board)
        })

    })
}

