const dbService = require('../../services/db.service');
const ObjectId = require('mongodb').ObjectId

module.exports = {
    query,
    getById,
    remove,
    add,
    update
}

async function query(filterBy = {}) {
    //TODO: handle criteria
    const criteria = {}
    try {
        const collection = await dbService.getCollection('board')
        return await collection.find(criteria).toArray()
    } catch (err) {
        console.log('Error, cannot find board', err)
        throw err
    }
}

async function add(board) {
    board.createdAt = Date.now();
    try {
        const collection = await dbService.getCollection('board')
        await collection.insert(board)
        return board
    } catch (err) {
        console.log('Error, cannot create board', err)
        throw err
    }
}

async function update(board) {
    const collection = await dbService.getCollection('board')
    try {
        await collection.updateOne({ "_id": ObjectId(board._id) }, { $set: { ...board, _id: ObjectId(board._id) } })
        return Promise.resolve()
    } catch (err) {
        console.log('Error, cannot update board', err)
        throw err
    }

}


async function remove(id) {
    const collection = await dbService.getCollection('board')
    try {
        await collection.deleteOne({ "_id": ObjectId(id) })
    } catch (err) {
        console.log('Error, cannot remove board', err)
        throw err
    }
}

async function getById(id) {
    try {
        const collection = await dbService.getCollection('board')
        const boardFound = await collection.findOne({ "_id": ObjectId(id) })
        return boardFound
    } catch (err) {
        console.log('Error, cannot get board', err)
        throw err
    }

}

