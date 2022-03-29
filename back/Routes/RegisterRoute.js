const express = require("express");
const app = express();
const router = express.Router();
const bodyParser = require("body-parser");
const bcrypt = require("bcrypt");
const UserModel = require('../Model/UserModel')

app.use(bodyParser.urlencoded({ extended: true }))

// RECUPERATION DES INFORMATIONS DONNEES PAR LE PATIENT LORS DE L'INSCRIPTION ET CREATION DU CLIENT DANS LA BDD EN CAS DE SUCCES
router.post("/", async (req, res, next) => {
    let email = req.body.user.email;
    let password = req.body.user.password;
    let gender = req.body.user.gender;

    if (email && password && gender) {
        let user = await UserModel.findOne({
            $or: [
                { email: email },
            ]
        })
            .catch((error) => {
                console.log(error);
            });
        if (user == null) {
            let data = req.body.user
            data.password = await bcrypt.hash(password, 10);
            UserModel.create(data)
            let string = {OK: "Compte créer"}
            res.send(string)
        } else {
            let string = { error: "Il y'a déjà un compte associé à cette adresse!" };
            res.send(string)
        }
    } else {
        let stringError = { error_info: "Vous devez obligatoirement rentrer un mail et un mot de passe et un genre!" }
        res.send(stringError)
    }
})

module.exports = router;