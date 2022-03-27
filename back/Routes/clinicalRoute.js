const express = require("express");
const app = express();
const router = express.Router();
const bodyParser = require("body-parser");
const excelToJson = require('convert-excel-to-json');

const result = excelToJson({
    sourceFile: 'essai_clinique.xlsx',
    header: {
        rows: 1
    }
});

app.use(bodyParser.urlencoded({ extended: true }))

router.get("/", async (req, res, next) => {
    res.send(result.Sheet1)
})

router.post("/search", async (req, res, next) => {
    let array = [];
    result.Sheet1.map(element => {
        if (req.body.search.specialite == element.B) {
            array.push(element)
            return element;
        } 
        if (req.body.search.organes === element.C) {
            array.push(element)
        }
        if (req.body.search.situation == element.D) {
            array.push(element)
        }
    })
    res.send(array)
})

module.exports = router;