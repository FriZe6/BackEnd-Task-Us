
const dbService = require('../../services/db.service');
const ObjectId = require('mongodb').ObjectId

async function query(userId) {
    try {
        const collection = await dbService.getCollection('user')
        if (userId) return await collection.findOne({ "_id": ObjectId(userId) })
        else return await collection.find().toArray()
    } catch (err) {
        console.log('Error, cannot find user/s', err)
        throw err
    }
}

async function add(user) {
    user.createdAt = Date.now();
    if(user.facebook){
        const newUser=await getByUsername(user.username, user)
        if(newUser) return user
    }
    try {
        const collection = await dbService.getCollection('user')
        await collection.insertOne(user)
        return user
    } catch (err) {
        console.log('Error, cannot create user', err)
        throw err
    }
}
async function update(user) {
    const collection = await dbService.getCollection('user')
    try {
        await collection.updateOne({ "_id": ObjectId(user._id) }, { $set: { ...user, _id: ObjectId(user._id) } })
        return Promise.resolve()
    } catch (err) {
        console.log('Error, cannot update user', err)
        throw err
    }
}

async function getByUsername(username, facebookUser) {
    try {
        const collection = await dbService.getCollection('user')
        const user = await collection.findOne({ "username": username })
        if(facebookUser){
            facebookUser._id= ObjectId(user._id) 
            return facebookUser
        }
        return user;
    } catch (err) {
        console.log('Error, cannot find user', err)
        throw err
    }
}
module.exports = {
    add,
    query,
    update,
    getByUsername
}
