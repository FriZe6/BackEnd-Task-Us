module.exports = connectSockets

function connectSockets(io) {
    //TODO: Complete Overhaul
    //TODO: Complete Overhaul
    //TODO: Complete Overhaul
    io.on('connection', socket => {

        socket.on('chat toyPage', toyPage => {
            console.log('toy page? ', toyPage)
            if (socket.toyPage) {
                socket.leave(socket.toyPage)
            }
            socket.join(toyPage)
            socket.toyPage = toyPage;
        })
        socket.on('chat newMsg', msg => {
            console.log(msg)
            // io.emit('chat addMsg', msg)
            // emits only to sockets in the same room
            io.to(socket.toyPage).emit('chat addMsg', msg)
        })
        socket.on('chat typing', loggedUser => {
            // io.emit('chat addMsg', msg)
            // emits only to sockets in the same room
            io.to(socket.toyPage).emit('chat showTyping', loggedUser)
        })
    })
}