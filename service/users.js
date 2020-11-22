const userModel = require('../models/users')

class UserService {
    async getPlan(userId) {
        let daysPlan = await userModel.findOne({'id': userId})
        return daysPlan
    }

    async insertUser(data) {
        let res = await userModel.create(data)
    }
}

module.exports = new UserService()