'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Answer extends Model {
    question (){
        this.hasMany('App/Models/Question')
    }
    user (){
        this.hasMany('App/Models/User')
    }
}

module.exports = Answer
