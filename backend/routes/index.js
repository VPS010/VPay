const express = require("express");
const router = express.Router();

const UserRouter = require('./user')
const AccountRouter = require('./accounts')


router.use("/user",UserRouter);
// /api/vi/user/signup
// /api/vi/user/signin
// /api/vi/user/changePassword



router.use("/account",AccountRouter);
// /api/v1/account/trasferMoney
// /api/v1/account/balance




module.exports=router;



