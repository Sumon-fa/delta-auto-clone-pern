const client = require('../db/db');
const HttpError=require('../middlewares/http-error')

exports.registerUser=async(req,res)=>{
    const {username,email,password}=req.body
    const image=req.file.path
    console.log(req.user)
    try{
        const user=await client.query('INSERT INTO users (username,email,password,image) VALUES($1,$2,$3,$4)',
        [username,email,password,image]
        )
        res.status(201).json({success:true})
    }catch(err){
        console.log(err)
    }
}
exports.login=async(req,res)=>{
  const {email,password}=req.body
    try{
        const users= await client.query('SELECT * FROM users')
     const identifiedUser=  users.rows.find(user=>user.email===email)
     if(!identifiedUser){
         throw new HttpError('Could not identify user, email is invalid',401)
     }
     else if(identifiedUser.password !==password){
        throw new HttpError('Could not identify user, password is invalid',401)
    }
    res.json({message:'you are logged in'})
    }catch(err){
        console.log(err)
        res.json({message:err.message,
        statusCode:err.statusCode
        })
    }
}



exports.getUsers=async(req,res)=>{
   
    try{
        const users= await client.query('SELECT * FROM users')
        res.status(201).json({users:users.rows})
    }catch(err){
        console.log(err)
    }
}