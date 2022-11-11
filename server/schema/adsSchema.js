import mongoose from 'mongoose';


const adsSchema=new mongoose.Schema({

    _id:{
        type:Number,
        required:true,
        unique:true,
    },
    companyId:Number,
    primaryText:String,
    headline:String,
    description:String,
    CTA:String,
    imageUrl:String
})


 const ads=mongoose.model("ads",adsSchema);

 export default ads