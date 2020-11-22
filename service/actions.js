const actionModel = require('../models/actions')

class ActionService {
    async getAction(actionId) {
        let action = await actionModel.findOne({'id': actionId})
        return action
    }

    async addAction(data) {
        let res = await actionModel.create(data)
    }
}

module.exports = new ActionService()