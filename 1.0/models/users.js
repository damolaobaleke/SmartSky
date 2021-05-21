let mongoose = require('mongoose');
let passportLocalMongoose = require('passport-local-mongoose');

let userSchema = mongoose.Schema({
    firstName: String,
    lastName: String,
    username:String,
    email: { type: String , required: true, unique: true},
    country: String,
    addressLine1: String,
    addressLine2: String,
    city: String,
    state: String,
    zipcode: String,
    phoneNumber: String,
    loginMethod: { type: String, default: "local-auth" },
    linkedInAuthUrl: String,
    googleAuthUrl: String,
    verificationToken: String,
    verified: {type:Boolean, default: false},
    qoutesIds: [{ type: mongoose.Schema.Types.ObjectId, ref: "qoutes" }]

    //IATA

})

userSchema.plugin(passportLocalMongoose) //{username: 'email'}

const user = mongoose.model('user', userSchema);
module.exports = user;