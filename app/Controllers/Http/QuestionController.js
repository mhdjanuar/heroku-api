'use strict'

const Question = use('App/Models/Question')

class QuestionController {

    async index({ response }){
        try{
            const questions = await Question.all()

            return response.status(200).send({data:questions})
        }catch(e){
            console.log(e)
        }
    }

    async store({ response,request }){
        try{
            const questions = Question.create(request.all())

            response.status(200).send({message:'succses',data:questions})
        }
        catch(e){
            console.log(e)
        }
    }
    
    
}

module.exports = QuestionController
