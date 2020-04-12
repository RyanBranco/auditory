var express = require("express");
var router = express.Router();
var uploadCtrl = require('../controllers/uploads');
const multer = require("multer");
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });