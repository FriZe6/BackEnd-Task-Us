const bcrypt = require('bcrypt')
const userService = require('../user/user.service')

const saltRounds = 10

async function login(username, password, facebook = '', imgUrl, email) {
    if (facebook) {
        const facebookUser = {
            fullName: username,
            username,
            imgUrl: imgUrl,
            email: email,
            boards: [],
            notifications: [],
            password:'0000'
        }
        const newUser=await signup(facebookUser)
        return newUser
    }
    if (!username || !password) return Promise.reject('email and password are required!')

    const user = await userService.getByUsername(username)
    if (!user) return Promise.reject('Invalid email or password')
    const match = await bcrypt.compare(password, user.password)
    if (!match) return Promise.reject('Invalid email or password')

    delete user.password;
    return user;
}

async function signup(user) {
    const hash = await bcrypt.hash(user.password, saltRounds)
    return await userService.add({ ...user, password: hash })
}

module.exports = {
    signup,
    login,
}