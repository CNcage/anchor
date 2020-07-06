const express = require("express");
const router = express.Router();

const keys = require("../../config/keys");
const User = require("../../models/User");
const { default: Diary } = require("../../client/src/components/diary/Diary");


router.post("/livediary", (req, res) => {
    // email
    // diary
    // date
    // time
    console.log(req.body)
});

router.get("/livediary", (req, res) => {
    console.log("hello world")
});