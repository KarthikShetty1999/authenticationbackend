const mongoose = require("mongoose");
module.exports=()=>{
    const connectionParameter = {
        useUnifiedTopology:true,
        useNewUrlParser: true,
    };
    try{
        mongoose.connect(process.env.DB,connectionParameter);
        console.log("Connected Succesfully");
    }catch(error)
    {
        console.log(error);
    }
};