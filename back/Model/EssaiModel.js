const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const EssaiModel = new Schema({
    ID: { type: String, required: true },
    id_user: { type: String, required: true },
    specialite: { type: String, required: true },
    organes: { type: String, required: true },
    situation: {type: String, required: true},
}, { timestamps: true });

var Essai = mongoose.model('Essai', EssaiModel);
module.exports = Essai;