'use strict'

const Answer = use('App/Models/Answer')

class AnswerController {

    async index({response}){
        const answers = await Answer.all()

        response.status(200).send({data:answers})
    }

    async store({request,response}){

        try{
            const data = request.all()

            const answer = await Answer.create(data)
    
            return response.status(200).send({message:"success",data:answer})
    
        }catch(e){
            console.log(e)
        }

    }
}

module.exports = AnswerController
