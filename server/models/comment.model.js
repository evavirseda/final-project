const mongoose = require("mongoose")
const Wave = require('../models/wave.model')

const Schema = mongoose.Schema

const commentSchema = new Schema({
    writtenBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    wave: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Wave'
    },
    description: String,
    title: String,
    isAccepted: {
        type: Boolean,
        default: false
    }
},
    {
        timestamps: true
    })

const Comment = mongoose.model("Comment", commentSchema)
module.exports = Comment
