var mongoose = require('mongoose');
var Todo = mongoose.model('Todo',{
    text:{
        type:String,
        require:true,
        minLength:1,
        trim:true
    },
    completed:{
        type:Boolean,
        default:true
    },
    completedAt:{
        type:Number,
        default:true
    }
});
module.exports = {
    Todo
};
