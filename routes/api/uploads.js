var express = require("express");
var router = express.Router();
var uploadCtrl = require('../../controllers/uploads');
const multer = require("multer");
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

router.get("/", uploadCtrl.getUploads);
router.get("/myuploads/:id", uploadCtrl.getUserUploads);

router.post("/upload", upload.single("audioFile"), uploadCtrl.postUpload);
router.post("/upload/avatar", upload.single("avatar"), uploadCtrl.postUpload);
router.post("/upload/thumbnail", upload.single("thumbnailFile"), uploadCtrl.postThumbnailUpload);
router.post("/createUpload", uploadCtrl.createUpload);

router.delete("/myuploads/:id", uploadCtrl.delete)

module.exports = router;