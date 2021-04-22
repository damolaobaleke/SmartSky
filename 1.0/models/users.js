let mongoose = require('mongoose');

let userSchema = mongoose.Schema({
    firstName: String,
    lastName: String,
    email: { type: String },
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
    verified: Boolean,
    qoutesIds: [{ type: mongoose.Schema.Types.ObjectId, ref: "qoutes" }]
        //IATA

})

let user = mongoose.model("user", userSchema);
module.exports = user;