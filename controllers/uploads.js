const Upload = require('../models/Upload');
const AWS = require("aws-sdk");

module.exports = {
    getUploads,
    getUserUploads,
    postUpload,
    postThumbnailUpload,
    createUpload,
    delete: deleteOne
};

let s3bucket = new AWS.S3({
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    region: process.env.AWS_REGION
});

async function getUploads(req, res) {
    Upload.find({}).populate("user").exec((err, uploads) => {
        res.status(200).json(uploads);
    });
}

async function getUserUploads(req, res) {
    const userUploads = await Upload.find({ user: req.params.id });
    res.status(200).json(userUploads)
}

function postUpload(req, res) {
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

function postThumbnailUpload(req, res) {
    console.log(req.file)
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
    const upload = new Upload(req.body);
    upload.save((err, upload) => {
        if (err) console.log(err)
    })
}

async function deleteOne(req, res) {
    const deletedUpload = await Upload.findByIdAndRemove(req.params.id);
    res.status(200).json(deletedUpload);
  }