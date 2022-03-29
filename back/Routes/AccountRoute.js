const express = require("express");
const app = express();
const router = express.Router();
const bodyParser = require("body-parser");
const bcrypt = require("bcrypt");
const EssaiModel = require('../Model/EssaiModel')

app.use(bodyParser.urlencoded({ extended: true }))


// RECUPERATION DES ESSAIS CLINIQUE DU PATIENT GRACE A SON ID D'UTILISATEUR
router.post("/", async (req, res, next) => {
    let id_user = req.body.user;

    if (id_user) {
        let essai = await EssaiModel.find({
            $or: [
                { id_user: id_user },
            ]
        })
            .catch((error) => {
                console.log(error);
            });
        if (essai != null) {
            res.send(essai);
        } else {
            let string = { error: "Vous n'avez enregister aucuns essais clinique!" };
            res.send(string)
        }
    }
})

module.exports = router;