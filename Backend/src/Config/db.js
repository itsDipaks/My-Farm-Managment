const mongoose=require("mongoose")
require("dotenv").config()
const Database=mongoose.connect(process.env.MONGO_URL)

module.exports={Database}