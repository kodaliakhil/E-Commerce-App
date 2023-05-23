const mongoose = require("mongoose")

const schema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
})

const db = new mongoose.model("users", schema)


const express = require("express")
const app = express()
app.use(express.json())
app.use(express.urlencoded())

mongoose.connect("mongodb+srv://vsasupalli:vsasupalli1234@db007.vd9amrw.mongodb.net/app?retryWrites=true&w=majority").then(
    () => console.log("DB Connected")
).catch(err => console.log(err))


app.post("/add" , async (req, res) => {
    const {name, email} = req.body 
    console.log(name,email)
    try{
        const newData = new db({name,email})
        res.json("user added successfuly")

    }catch(err){
        console.log(err.message)
    }
})

app.get("/adsa", (req, res) => {
    res.send("Hello World..!")
})

app.listen(5000, () => {
    console.log("app started on 5000")
})