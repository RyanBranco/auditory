var express = require("express");
var router = express.Router();
var uploadCtrl = require('../../controllers/uploads');
const multer = require("multer");
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

router.get("/", uploadCtrl.getUploads)
router.post("/upload", upload.single("audioFile"), uploadCtrl.postUpload);
router.post("/createUpload", uploadCtrl.createUpload);

module.exports = router;