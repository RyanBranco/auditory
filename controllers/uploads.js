const Upload = require('../models/Upload');
const AWS = require("aws-sdk");

module.exports = {
    postUpload,
    createUploadModel
}

let fileId = "";

const ID = function() {
    return '_' + Math.random().toString(36).substr(2, 9);
};

const getExtention = function(filename) {
    return filename.split('.').pop();
}

let s3bucket = new AWS.S3({
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    region: process.env.AWS_REGION
});


function postUpload(req, res) {
    req.file.originalname = ID() + "." + getExtention(req.file.originalname);
    fileId = req.file.originalname;
    console.log("this is fileId", fileId);
    console.log("req.file: ", req.file)
    req.body.fileId = req.file.originalname;
    const file = req.file;
    
    const params = {
        Bucket: process.env.AWS_BUCKET_NAME,
        Key: file.originalname,
        Body: file.buffer,
        ContentType: file.mimetype,
        ACL: "public-read"
    };
    
    s3bucket.upload(params, function(err, data) {
        if (err) {
            res.status(500).json({ error: true, Message: err });
        }
    });
}

function createUploadModel(req, res) {
    req.body.audioFile = fileId;
    req.body.thumbnailFile = fileId;
    console.log("body: ", req.body)
    const upload = new Upload(req.body);
    upload.save((err, upload) => {
        if (err) console.log(err)
    })
}