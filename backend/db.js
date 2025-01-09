const mongoose = require('mongoose')

const dblink = process.env.MONGO_URL
mongoose.connect(dblink)

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true,
        minLength: 3,
        maxLength: 30
    },
    password: {
        type: String,
        required: true,
        minLength: 6
    },
    firstname: {
        type: String,
        required: true,
        trim: true,
        maxLength: 50
    },
    lastname: {
        type: String,
        required: true,
        trim: true,
        maxLength: 50
    }
})

const accountSchema = new mongoose.Schema({
    userid: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Users',
        required: true
    },
    balance: {
        type: Number,
        required: true
    }
})

const Users = mongoose.model("Users", userSchema);

const Accounts = mongoose.model("Accounts", accountSchema);

module.exports = {
    Users, Accounts
};