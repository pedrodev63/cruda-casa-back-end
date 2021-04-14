'use strict'
require("./src/database/connect-mongoose-db")
require("dotenv").config()
const express = require("express")
const app = express()
const morgan = require("morgan")
const bodyParser = require("body-parser")
const session = require("express-session")

app.use(session({
    secret: process.env.SESSION_SECRET_KEY,
    resave: true,
    saveUninitialized: true
}))

app.use(bodyParser.urlencoded({ extended: false }))
app.use(morgan('dev'))
//app.use(require("./src/routes/routes"))

app.set("server_port", process.env.PORT)
app.listen(console.log(`Server running on port: ${app.get('server_port')}`))