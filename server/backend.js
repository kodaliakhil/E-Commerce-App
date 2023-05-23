const express = require("express")
const dbConnection= require("./db")
const cors = require("cors")
const app=express()

app.listen(5000,()=>{
    console.log("Server Connected 5000 ")

})

app.use(cors())
app.use(express.json())

app.post("/login",(req,res)=>{
    const Username=req.body.Username
    const Password = req.body.Password
    dbConnection.query('SELECT * FROM usertable where Username= ? And Password= ?',[Username,Password], (err,result) => {
        if(err){
          console.log(err)
        //   res.send(JSON.stringify({"err":"Wrong Credientials"}))
        }
        else{
          if (result.length===0){
            res.status(400)
            res.send(JSON.stringify({err:"Wrong Crediential"}))
          }else{
            const payload={Username}
            const jwtToken=jwt.sign(payload,"jwt_token");
           
           res.status(200);
           res.send({jwtToken,result});
          }            
        }   
    }
    );
})



