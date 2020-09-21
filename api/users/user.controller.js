const userService = require('./user.service')

async function getUsers(req, res) {
    const users = await userService.query()
    res.send(users)
}
async function getUser(req, res) {
    const user = req.body
    const users = await userService.query(user)
    res.send(users)
}
async function addUser(req, res) {
    const user = await userService.add(req.body)
    res.send(user)
}
async function updateUser(req, res) {
    const user = await userService.update(req.body)
    res.send(user)
}


module.exports = {
    getUsers,
    getUser,
    addUser,
    updateUser
};