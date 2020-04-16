const Upload = require('../models/Upload');
const AWS = require("aws-sdk");

module.exports = {
    getUploads,
    postUpload,
    createUpload
};

let s3bucket = new AWS.S3({
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    region: process.env.AWS_REGION
});

async function getUploads(req, res) {
    const uploads = await Upload.find({});
    res.status(200).json(uploads);
}

function postUpload(req, res) {
    console.log("file: ", req.file)
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

function createUpload(req, res) {
    console.log("model: ", req.body)
    const upload = new Upload(req.body);
    upload.save((err, upload) => {
        if (err) console.log(err)
    })
}