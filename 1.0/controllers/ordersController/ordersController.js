const User = require('../../models/users');
const Order = require('../../models/order');
const {failureRspMsg, successRspMsg} = require('../../utils/response')

module.exports = {
    createOrder:async (req, res)=>{
        console.log('The order::');

        Order.create(req.body, (err, orderInDb)=>{
            if(!err){
                console.log(orderInDb)

                //store order under user
                console.log('The request parameters::');
                console.log(req.params)
                User.findById(req.params.userid, (err, userIndb)=>{
                    if(!err){
                        //console.log(userIndb)
                        //prevent duplicate order info
                        // userIndb.orders.addToset(orderInDb);
                        // userIndb.save();
                    }else{
                        console.log(err)
                    }
                })
                return successRspMsg(res, 'Order created', 200, orderInDb);
            }else{
                return failureRspMsg(res, 'Failed to store order', 404, null);
            }
        })
    }
}