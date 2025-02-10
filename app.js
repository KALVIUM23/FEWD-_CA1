const express=require('express');
const app=express();
require("dotenv").config();
app.use(express.json());

app.get('/',(req,res)=>{
    res.send('welcome to the world of of full stack development');
})

app.get("/users",async(req,res)=>{
    try{
        res.status(200).json({message:"recieved data"});
    }catch(err){
        res.status(500).json({message:"internal server error"})
    }

});

app.post("/users",async(req,res)=>{
    try{
        let{username,email,password,dateofbirth}=req.body;

        if (!username || !email || !password || !dateofbirth){ 
            return res.status(400).json({message:"please fill all the fields"})
        };

        ifelse(!username){   
            return res.status(400).json({message:"username cannot be empty"})
        };
        
        ifelse(!email){
            return res.status(400).json({message:"email cannot be empty"})
        };
        
        ifelse(password.length<8 || password.length>16){ 
            return res.status(400).json({message:"password should in range between 8 to 16"})
        }
        ifelse(!Dateofbirth)
{             return res.status(400).json({message:"date of birth is required to fill"})
        }
        res.status(200).json({message:`daa received as name :{name}, email:{email}, password:{password}, dateofbirth:{dateofbirth}`});
    }
    catch(error){
        res.status(500).json({message:"internal server error"});

    }
});

let PORT=process.env.PORT || 5050;
app.listen(PORT,()=>{
    console.log(`server is running on port ${PORT}`);
})