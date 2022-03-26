const express = require("express");
const app = express();
const router = express.Router();
const bodyParser = require("body-parser");
// const bcrypt = require("bcrypt");
// const UserModel = require('../Model/UserModel')
const excelToJson = require('convert-excel-to-json');
 
const result = excelToJson({
    sourceFile: 'essai_clinique.xlsx'
});

app.use(bodyParser.urlencoded({ extended: true }))

router.get("/", async (req, res, next) => {
    res.send(result.Sheet1)
    // res.send({ message : "je suis la"})
})

module.exports = router;