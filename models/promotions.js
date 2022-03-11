const { model } = require("mongoose");
const mongoose=require("mongoose");
const schema=mongoose.Schema;
require("mongoose-currency").loadType(mongoose);
const Currency = mongoose.Types.Currency;

var PromotionSchema = new schema({
    name:{
        type:String,
        require:true,
    } ,
    image:{
        type:String,
        require:true
    },
    label:{
        type:String,
        require:true
    },
    price:{
        type: Currency,
        required: true,
        min: 0
    },
    description:{
        type:String,
        require:true
    } ,
    featured:{
        type: Boolean,
        default:false    
    } 
},{
    timestamps: true
});

 var Promotions=mongoose.model("Promotion",PromotionSchema);
 module.exports= Promotions;
 