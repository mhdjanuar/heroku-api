'use strict'

const User = use('App/Models/User')

class UserController {
    async index({response}){
        const users = await User.all()

        response.status(200).send({message:"succses for deploy", data:users})
    }

    async store({request,response}){
        try{
            const data = request.all()
            const user = await User.create(data)

            response.status(200).send(user)
        }
        catch(e){
            console.log(e)
        }
    }
}

module.exports = UserController
