const authService = require('./auth.service')

async function login(req, res) {
    console.log('req?', req.body)
    const { username, password, facebookId, imgUrl, email } = req.body
    try {
        const user = await authService.login(username, password, facebookId, imgUrl, email)
        req.session.user = user;
        res.json(user)
    } catch (err) {
        res.status(401).send({ error: err })
    }
}

async function signup(req, res) {
    try {
        const user = req.body
        const newUser = await authService.signup(user)
        req.session.user = newUser
        res.json(newUser)
    } catch (err) {
        res.status(500).send(err)
    }
}
async function logout(req, res) {
    try {
        req.session.destroy()
        res.send({ message: 'logged out successfully' })
    } catch (err) {
        res.status(500).send({ error: err })
    }
}
async function update(req, res) {
    const user = req.body
    try {
        const updatedUser = await authService.update(user)
        res.json(updatedUser)
    } catch (err) {
        res.status(401).send({ error: err })
    }
}

module.exports = {
    login,
    signup,
    logout,
    update
}