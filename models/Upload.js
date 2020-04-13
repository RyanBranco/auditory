const mongoose = require("mongoose");

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
    audioFileId: String,
    thumbnailFileId: String,
    description: String,
    category: String,
    user: {
        type: Schema.Types.ObjectId, 
        ref: "User"
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