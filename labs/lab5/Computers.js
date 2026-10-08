/*
This file will be used to set up the routesfor the GET param path
*/

const express = require("express")
const router = express.Router()

router.route("/java")
    .get((req,res) => {
        res.send("Used GET medhot - /books/computers/java")

    })

router.route("/python")
    .get((req,res) => {
        res.send("Used GET medhot - /books/computers/python")

    })
router.route("/game-dev")
    .get((req,res) =>{
        res.send("Used GET method - /books/computers/game-dev")
    })
module.exports = router