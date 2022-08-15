const express = require('express');
const router = express.Router();
const multer = require('multer');
const AWS = require('aws-sdk');
const storage = multer.memoryStorage({
    destination: function (req, file, callback) {
      callback(null, '');
    },
  });