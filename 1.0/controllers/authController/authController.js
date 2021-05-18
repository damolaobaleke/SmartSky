let User = require('../../models/users');
let crypto = require('crypto');

module.exports={
    register:(req,res)=>{
        let user = new User({username:req.body.username,fitstName:'',emailToken:crypto.randomBytes(64).toString('hex')});

        User.register(user, req.body.pwd, async function(err, userIndb){
            if(!err){

            }
        })
    }


}
