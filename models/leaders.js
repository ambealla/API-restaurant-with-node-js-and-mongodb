
const mongoose=require("mongoose");
const schema=mongoose.Schema;

var LeaderSchema=new schema({
    name:{
        type:String,
        require:true,
    } ,
    image:{
        type:String,
        require:true
    },
    designation:{
        type:String,
        require:true
    },
    abbr:{
        type:String,
        require:true
    } ,
    description:{
        type:String,
        require:true
    },
    
    featured:{
        type: Boolean,
        default:false    
    } 
},{
    timestamps: true
});

 var Leaders=mongoose.model("Leader",LeaderSchema);
 module.exports= Leaders;
 