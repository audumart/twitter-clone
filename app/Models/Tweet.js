'use strict'

const Model = use('Model')

user (){
    return this.belongsTo('App/Models/User')
}

class Tweet extends Model {
}

module.exports = Tweet
