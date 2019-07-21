'use strict'

const Answer = use('App/Models/Answer')

class AnswerController {

    async index({response}){
        const answers = await Answer.all()

        response.status(200).send({data:answers})
    }

    async store({request,response}){

        try{
            const answers = request.collect(['question_id','user_id','answer'])

            const answer = await Answer.createMany(answers)
    
            return response.status(200).send({message:"success"})
    
        }catch(e){
            console.log(e)
        }

    }
}

module.exports = AnswerController
