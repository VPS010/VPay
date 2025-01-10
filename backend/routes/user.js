const express = require('express')
const { Users, Accounts } = require('../db')
const zod = require('zod')
const jwt = require('jsonwebtoken')
const UserAuth = require('../middleware/user')

const dotenv = require("dotenv");
dotenv.config();
const Jwt_KEY = process.env.JWT_KEY;

const router = express.Router();
// /api/vi/user/signup
// /api/vi/user/signin
// /api/vi/user/changePassword


const signupSchema = zod.object({
    username: zod.string().email(),
    firstname: zod.string(),
    lastname: zod.string(),
    password: zod.string()
})

const signinSchema = zod.object({
    username: zod.string().email(),
    password: zod.string()
})


const updateSchema = zod.object({
    password: zod.string().optional(),
    firstname: zod.string().optional(),
    lastname: zod.string().optional()
})

router.post("/signup", async (req, res) => {

    const body = req.body;
    const { success } = signupSchema.safeParse({
        username: body.username,
        firstname: body.firstname,
        lastname: body.lastname,
        password: body.password
    });
    if (!success) {
        return res.send({
            msg: "enter valid inputs"
        })
    }

    const user = await Users.findOne({
        username: body.username
    })

    if (user) {
        return res.status(400).json({
            msg: "this username already in use"
        })
    }

    const dbuser = await Users.create(body);

    const token = jwt.sign({ userId: dbuser._id }, Jwt_KEY);

    await Accounts.create({
        userid: dbuser._id,
        balance: (1 + Math.random()) * 10000
    })



    res.json({
        token: token,
        msg: "new user added successfully"
    })


})



router.post("/signin",async (req, res) => {

    const { success } = signinSchema.safeParse(req.body);
    if (!success) {
        return res.status(411), json({
            msg: "Incorrect Inputs"
        })
    }

    const user =await Users.findOne({
        username: req.body.username,
        password: req.body.password
    })

    if (user) {
        const token = jwt.sign({ userId: user._id }, Jwt_KEY);

        res.json({
            token: token
        })

        return;
    }

    res.status(411).json({
        msg: "Error while logging in , Signup first!"
    })

})


router.put("/update", UserAuth, async (req, res) => {

    const { success } = updateSchema.safeParse(req.body);
    if (!success) {
        return res.status(400).json({
            msg: "Invalid inputs"
        })
    }

    const { firstName, lastName, password } = req.body;

    try {
        const updates = {};
        if (firstName) updates.firstName = firstName;
        if (lastName) updates.lastName = lastName;
        if (password) {
            updates.password = password;
        }
        console.log(req.userId);
        const result = await Users.updateOne({ _id: req.userId }, { $set: updates });
        res.json({
            message: "Updated successfully",
        })

    } catch (error) {
        console.error("Error updating user:", error);
        res.status(500).json({
            message: "Server error",
        })
    }

})


router.get("/bulk", UserAuth, async (req, res) => {


    const filter = req.query.filter || "";

    const regexFilter = new RegExp(filter, "i"); // Case-insensitive regex, escaped for safety

    try {
        const users = await Users.find({

            $or: [{
                firstname: {
                    $regex: regexFilter
                }
            }, {
                lastname: {
                    $regex: regexFilter
                }
            }]
        })

        res.json({
            users: users.map(user => ({
                username: user.username,
                firstname: user.firstname,
                lastname: user.lastname,
                _id: user._id
            }))
        })
    } catch (e) {
        console.error(e);
        res.status(500).json({
            message: "Server error while fetching users",
        });
    }

})


module.exports = router




