const mongoose = require('mongoose')

const participantSchema = new mongoose.Schema({
    type:Map,
    of:String
})

const orderSchema = new mongoose.Schema({
    description: String,
    trackingNumber: {type: String, default: Math.random()},
    dimensions:{
        length:{type: Number},
        height:{type: Number},
        width:{type: Number},
        weight:{type: Number}
    },
    dateShipped: {type: Date, default: Date.now()},
    dateCreated: {type: Date, default:Date.now()},
    state:{type:Map, of:String},
    participants: {type: Map, of:Map},
    airport: {type: Map, of:String},
    address:{type:Map, of:String},
    shippingCost: Number,
    deliveryType:String
})




const order = mongoose.model('order', orderSchema);
module.exports = order;