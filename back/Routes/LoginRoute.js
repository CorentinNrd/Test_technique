const express = require("express");
const app = express();
const router = express.Router();
const bodyParser = require("body-parser");
const bcrypt = require("bcrypt");
const UserModel = require('../Model/UserModel')

app.use(bodyParser.urlencoded({ extended: true }))

// VERIFICATION DES INFORMATIONS DU PATIENT A LA CONNEXION AVEC CELLES DANS LA BASE DE DONNEE ET CREATION DE LA SESSION 
// EN CAS DE SUCCES
router.post("/", async (req, res, next) => {
    let email = req.body.user.email;
    let password = req.body.user.password;

    if (email && password) {
        let user = await UserModel.findOne({
            $or: [
                { email: email },
            ]
        })
            .catch((error) => {
                console.log(error);
            });
        if (user != null) {
            var result = await bcrypt.compare(req.body.user.password, user.password);
            if (result === true) {
                req.session.user = user;
                res.send(req.session);
            }
        } else {
            let string = { error: "Il n'y a pas de compte à cette adresse!" };
            res.send(string)
        }
    } else {
        let stringError = { error_info: "Vous devez obligatoirement rentrer un mail et un mot de passe!" }
        res.send(stringError)
    }
})

module.exports = router;