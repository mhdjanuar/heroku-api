'use strict'

const User = use('App/Models/User')

class UserController {
    async index({response}){
        response.status(200).send({message:"succses for deploy"})
    }
}

module.exports = UserController
