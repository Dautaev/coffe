
const express = require("express");
const mongoose = require("mongoose");
const app = express();

app.use(express.json())
app.use(require("./routes/Drinks.route"))

mongoose.connect("mongodb+srv://adam:pasiman1100@cluster0.3wz3oli.mongodb.net/cafe", (err)=>{
    if(err){
        console.log(error.message)
    }
    console.log("mongoose запущен");

    app.listen(3000, () => {
        console.log("сервер запущен")
    })
})