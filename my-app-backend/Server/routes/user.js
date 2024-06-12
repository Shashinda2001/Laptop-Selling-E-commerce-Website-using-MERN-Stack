const express = require("express");
const router=express.Router();
const User = require("../models/user");
const auth =require("../middleware/auth");

//user sign
router.post("/users",async (req,res)=>{
    console.log(req.body);
    const user =new User( req.body);

    try{
        await user.save();
        res.status(201).send(user);
    }
    catch(error){
        res.status(400).send(error);
    }
   

});



// user login 

router.post("/users/login", async (req,res)=>{
    try{
    const user= await  User.findByCredentials(req.body.email,req.body.password);
    const token =await user.generateAuthToken();

    res.send({user,token});   
    }
    catch(error){
     res.status(401).send();
    }
})

module.exports =router;