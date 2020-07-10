const express = require("express")
const router = express.Router()
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")

const keys = require("../../config/keys")
const validateRegisterInput = require("../../validation/register")
const validateLoginInput = require("../../validation/login")

const User = require("../../models/User")
const Diary = require("../../models/Diary")

router.post("/register", (req, res) => {
    const { errors, isValid } = validateRegisterInput(req.body)
    if (!isValid) {
        return res.status(400).json(errors)
    }
    User.findOne({ email: req.body.email }).then((user) => {
        if (user) {
            return res.status(400).json({ email: "Email already exists" })
        } else {
            const newUser = new User({
                name: req.body.name,
                email: req.body.email,
                password: req.body.password,
            })
            bcrypt.genSalt(10, (err, salt) => {
                bcrypt.hash(newUser.password, salt, (err, hash) => {
                    if (err) throw err
                    newUser.password = hash
                    newUser
                        .save()
                        .then((user) => res.json(user))
                        .catch((err) => console.log(err))
                })
            })
        }
    })
})

router.post("/login", (req, res) => {
    const { errors, isValid } = validateLoginInput(req.body)
    if (!isValid) {
        return res.status(400).json(errors)
    }
    const email = req.body.email
    const password = req.body.password

    User.findOne({ email }).then((user) => {
        if (!user) {
            return res.status(404).json({ emailnotfound: "Email not found" })
        }
        bcrypt.compare(password, user.password).then((isMatch) => {
            if (isMatch) {
                const payload = { id: user.id, name: user.name }
                jwt.sign(payload, keys.secretOrKey, (err, token) => {
                    res.json({ success: true, token: "Bearer " + token })
                })
            } else {
                return res
                    .status(400)
                    .json({ passwordincorrect: "Password incorrect" })
            }
        })
    })
})

router.post("/submitdiary", (req, res) => {
    const _id = req.body._id
    const diary = new Diary({
        date: req.body.newDiary.date,
        time: req.body.newDiary.time,
        diary: req.body.newDiary.diary,
    })
    User.findById({ _id }).then((user) => {
        if (!user) {
            return res.status(404).json({ userNotExist: "Incorrect User" })
        } else {
            diary.save((err) => {
                if (err)
                    res.status(500).json({
                        message: {
                            msgBody: "Error has occured",
                            msgError: true,
                        },
                    })
                else {
                    user.diaries.push(diary)
                    user.save((err) => {
                        if (err)
                            res.status(500).json({
                                message: {
                                    msgBody: "Error has occured",
                                    msgError: true,
                                },
                            })
                        else
                            res.status(200).json({
                                message: {
                                    msgBody: "Successfully created diary",
                                    msgError: false,
                                },
                            })
                    })
                }
            })
        }
    })
})

router.post("/records", (req, res) => {
    const getDiaries = async (user) => {
        const loaddiaries = []

        for (const diary of user.diaries) {
            // console.log(`step1: ${diary}`);
            loaddiaries.push(await Diary.find({ _id: diary }))
        }
        return loaddiaries
    }

    User.findById(req.body._id).then(async (user) => {
        if (!user) {
            return res.status(404).json({
                response: { data: null },
                message: { msgBody: "Error has occured", msgError: true },
            })
        } else {
            return res.status(200).json({
                response: { data: null },
                diaries: await getDiaries(user),
                message: {
                    msgBody: "Successfully pulled records",
                    msgError: false,
                },
            })
        }
    })
})

module.exports = router
