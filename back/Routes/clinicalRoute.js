const express = require("express");
const app = express();
const router = express.Router();
const bodyParser = require("body-parser");
const EssaiModel = require('../Model/EssaiModel')
const excelToJson = require('convert-excel-to-json');

// CONVERTION DU FICHIER EXCEL EN JSON
const result = excelToJson({
    sourceFile: 'essai_clinique.xlsx',
    header: {
        rows: 1
    }
});

app.use(bodyParser.urlencoded({ extended: true }))

// RECUPERATION DE TOUT LES ESSAIS CLINIQUES
router.get("/", async (req, res, next) => {
    res.send(result.Sheet1)
})

// RECHERCHE DANS L'OBJET CONTENANT LES ESSAIS CLINIQUES DU FICHIER EXCEL
router.post("/search", async (req, res, next) => {
    let array = [];
    let organes = req.body.search.organes;
    let situation = req.body.search.situation;
    let specialite = req.body.search.specialite;

    result.Sheet1.map(element => {
        if (organes == element.C && specialite == element.B && situation == element.D) {
            array.push(element)
            return element;
        } else if (organes == element.C && specialite == element.B && situation == undefined ) {
            array.push(element)
            return element;
        } else if (specialite == element.B && situation == element.D && organes == undefined) {
            array.push(element)
            return element;
        } else if (specialite == undefined && situation == element.D && organes == element.C) {
            array.push(element)
            return element;
        } else if (specialite == element.B && situation == undefined && organes == undefined) {
            array.push(element)
            return element;
        } else if (specialite == undefined && situation == undefined && organes == element.C) {
            array.push(element)
            return element;
        }
    })
    res.send(array)
})

// ENREGISTREMENT DE L'ESSAI DU CLINIQUE DANS LA BASE DE DONNEE AVEC L'ID DU PATIENT
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
            let string = { OK: "L'essai clinique est bien enregistré!" };
            res.send(string)
        } else {
            let string = { error: "Cet essai clinique à déjà été enregistré!" };
            res.send(string)
        }
    }
})

// SUPPRESSION DE L'ESSAI CLINIQUE DU COMPTE DU CLIENT ET DE LA BASE DE DONNE
router.post("/delete", async (req, res, next) => {
    let ID = req.body.essai;
    let id_user = req.body.user;

    if (ID && id_user) {
        let essai = await EssaiModel.deleteOne({
            $or: [
                { id_user: id_user, ID: ID }
            ]
        })
        if (essai) {
            let string = { OK: "L'essai clinique a bien été supprimé!" }
            res.send(string)
        } else {
            let string = { error: "Veuillez réessayer!" }
            res.send(string)
        }
    }
})

module.exports = router;