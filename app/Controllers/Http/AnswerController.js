'use strict'

class AnswerController {
    async store({request,response}){

        try{
            const data = request.all()

            const answer = await Answer.create(data)
    
            return response.status(200).send({message:"success"})
    
        }catch(e){
            console.log(e)
        }

    }
}

module.exports = AnswerController
