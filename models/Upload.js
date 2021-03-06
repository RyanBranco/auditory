const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const commentSchema = new Schema({
    user: {type: Schema.Types.Mixed},
    content: String,
}, {
    timestamps: true
});

const fileSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    audioFile: {
        type: Schema.Types.Mixed
    },
    thumbnailFile: {
        type: Schema.Types.Mixed
    },
    description: String,
    category: String,
    user: {
        type: Schema.Types.ObjectId, 
        ref: "User"
    },
    listens: {
        type: Number,
        default: 0
    },
    likes: {
        type: Number, 
        defualt: 0
    },
    dislikes: {
        type: Number, 
        defualt: 0
    },
    comments: [commentSchema]
}, {
    timestamps: true
});

module.exports = mongoose.model("File", fileSchema)