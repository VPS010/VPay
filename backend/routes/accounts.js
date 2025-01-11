const express = require('express');
const UserAuth = require('../middleware/user');
const router = express.Router();
const { Accounts } = require('../db')
const mongoose = require('mongoose');
const zod = require('zod');


const transferSchema = zod.object({
    amount: zod.number().positive(),
    to: zod.string().nonempty(),
});


router.get("/balance", UserAuth, async (req, res) => {

    const account = await Accounts.findOne({
        userid: req.userId
    });

    res.json({
        balance: account.balance
    })

})



router.post("/transfer", UserAuth, async (req, res) => {
    console.log(req.body);
    const { success } = transferSchema.safeParse(req.body);
    if (!success) {
        return res.status(400).json({ msg: "Invalid transfer details" });
    }

    const session = await mongoose.startSession();

    session.startTransaction();
    const { amount, to } = req.body;

    const account = await Accounts.findOne({
        userid: req.userId
    }).session(session);


    if (!account || account.balance < amount) {
        await session.abortTransaction();
        return res.status(400).json({
            msg: "Insufficient balance"
        })
    }

    const toAccount = await Accounts.findOne({
        userid: to
    }).session(session);

    if (!toAccount) {
        await session.abortTransaction();
        return res.json({
            msg: "Invalid account"
        })
    }

    await Accounts.updateOne({ userid: req.userId },
        { $inc: { balance: -amount } }
    ).session(session)

    await Accounts.updateOne({ userid: to },
        { $inc: { balance: amount } }
    ).session(session)

    await session.commitTransaction();

    res.json({
        msg: "Transfer successful"
    });


});






module.exports = router