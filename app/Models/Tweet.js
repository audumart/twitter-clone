'use strict'

const Model = use('Model')



class Tweet extends Model {
    user () {
        return this.belongsTo('App/Models/User')
    }

    favorites() {
        return this.hasMany('App/Models/Favorite')
    }
}

module.exports = Tweet
function newFunction() {
    user();
    {
        return this.belongsTo('App/Models/User');
    }
}

