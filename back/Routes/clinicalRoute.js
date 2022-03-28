const express = require("express");
const app = express();
const router = express.Router();
const bodyParser = require("body-parser");
const EssaiModel = require('../Model/EssaiModel')
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

router.post("/save", async (req, res, next) => {
    let ID = req.body.essai.A
    let specialite = req.body.essai.B
    let organes = req.body.essai.C
    let situation = req.body.essai.D
    let id_user = req.body.user

    if (ID && id_user && specialite && organes && situation) {
        let essai = await EssaiModel.findOne({
            $or: [
                { ID: ID },
            ]
        })
            .catch((error) => {
                console.log(error);
            });
        if (essai == null) {
            let data = {
                ID: req.body.essai.A,
                id_user: req.body.user,
                specialite: req.body.essai.B,
                organes: req.body.essai.C,
                situation: req.body.essai.D
            }
            EssaiModel.create(data)
        } else {
            let string = { error: "Cet essai clinique à déjà été enregistré!" };
            res.send(string)
        }
    }
})

module.exports = router;