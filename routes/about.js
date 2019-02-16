//File Name" about.js
//Author Name: Shila (300969886) Data: 11 Feb 2019

let express = require("express");
let router = express.Router();

/* GET about. */
router.get("/", function (req, res, next) {
    res.send("respond with a resource");
});

module.exports = router;
