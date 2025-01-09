const express = require('express');
const UserAuth = require('../middleware/user');
const router = express.Router();
const { Accounts } = require('../db')
const mongoose = require('mongoose');
const zod = require('zod');



router.get("/balance", UserAuth, async (req, res) => {

    const account = await Accounts.findOne({
        userId: req.body.userId
    });

    res.json({
        balance: account.balance
    })

})


const transferSchema = zod.object({
    amount: zod.number().positive(),
    to: zod.string().nonempty(),
});


router.post("/transfer", UserAuth, async (req, res) => {

    const { success, error } = transferSchema.safeParse(req.body);
    if (!success) {
        return res.status(400).json({ msg: "Invalid transfer details" });
    }

    const session = await mongoose.startSession();

    session.startTransaction();
    const { amount, to } = req.body;

    const account = await Accounts.findOne({
        userId: req.userId
    }).session(session);


    if (!account || account.balance < amount) {
        await session.abortTransaction();
        return res.status(400).json({
            msg: "Insufficient balance"
        })
    }

    const toAccount = await Accounts.findOne({
        userId: to
    }).session(session);

    if (!toAccount) {
        await session.abortTransaction();
        return res.json({
            msg: "Invalid account"
        })
    }

    await Accounts.updateOne({ userId: req.userId },
        { $inc: { balance: -amount } }
    ).session(session)

    await Accounts.updateOne({ userId: to },
        { $inc: { balance: amount } }
    ).session(session)

    await session.commitTransaction();

    res.json({
        msg: "Transfer successful"
    });


});






module.exports = router