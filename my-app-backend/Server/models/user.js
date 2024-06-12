const mongoose = require("mongoose");
const bcrypt=require("bcryptjs"); 
const jwt =require("jsonwebtoken");

const Schema= mongoose.Schema;


const userSchema = new Schema({
    name:{
        type:String,
        required:true
    },
    
    email:{
        type:String,
        required:true,
        unique:true,
        trim:true,
    },
    password:{
        type:String,
        required:true,
        trim:true,

    },
    tokens:[
        {
            token:{
                type:String
                  }
        }
    ]
});

userSchema.pre("save",async function (next){
   const user =this;

   if(user.isModified("password")){
    user.password=await bcrypt.hash(user.password,8);
   }
   next();

})
//email , password eka thiyena use kenek innawada balanawa
userSchema.statics.findByCredentials = async (email, password) => {
    const user = await User.findOne({ email });

    if (!user) {
        throw new Error('Unable to login. User not found.');
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
        throw new Error('Unable to login. Wrong password.');
    }

    return user;
};


//token eka hadala userta token ekak danna
userSchema.methods.generateAuthToken =async function (){
 const user =this;

 const payload = {
    _id: user._id.toString(),
    name: user.name, // Assuming user has a 'name' field
    age: user.email // Assuming user has an 'age' field
};

 const token=jwt.sign(payload,"mysecret");
 user.tokens = user.tokens.concat({token});

 await user.save();

 return token;
}


const User = mongoose.model("User",userSchema);

module.exports  = User;