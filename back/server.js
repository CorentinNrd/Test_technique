const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express()
const apiPort = 8000
const path = require('path');
const session = require("express-session");
require('dotenv').config({path: '.env'})
require('./Config/db');

app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())
app.use(bodyParser.json())

app.use(session({
    secret: "session",
    resave: true,
    saveUninitialized: false,
}))

const login = require('./Routes/LoginRoute')
const register = require('./Routes/RegisterRoute')
const clinical = require('./Routes/clinicalRoute')
const account = require('./Routes/AccountRoute')

app.use("/login", login);
app.use("/register", register);
app.use("/clinical", clinical);
app.use("/account", account);

app.get('/',  (req, res) => {
    res.sendStatus(200)
})

app.listen(apiPort, () => console.log(`Server running on port http://localhost:${apiPort}`))