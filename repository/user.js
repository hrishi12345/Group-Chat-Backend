const User=require('../models/user')
class userRepository{
    async createuser({username,email,password,phoneNumber}){
        try{
            const response=await User.create({username,email,password,phoneNumber})
            return response
        }catch(error){
            console.log('Error while creating user')
            throw{error}
        }
    }
    async getuser({email}){
        try{
            const response=await User.findOne({where:{email:email}})
            
            return response
        }catch(error){
            console.log('error while getting the data')
            throw(error)
        }
    }
}
module.exports=userRepository