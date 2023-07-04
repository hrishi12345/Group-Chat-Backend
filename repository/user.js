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
}
module.exports=userRepository