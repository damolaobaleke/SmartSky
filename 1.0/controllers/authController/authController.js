let User = require('../../models/users');
let crypto = require('crypto');
const passport = require('passport');
const {failureRspMsg,successRspMsg} = require('../../utils/response')

module.exports={
    register:(req,res)=>{
        let user = new User({username: req.body.username, email:req.body.email, verificationToken:crypto.randomBytes(64).toString('hex')});

        User.register(user, req.body.pwd, async function(err, userIndb){
            if(!err){
                console.log(userIndb);
                res.send({data: userIndb});

                //send verification email
                const email = `https://${req.headers.host}/verify-email?token=${userIndb.verificationToken}`
            }else{
                console.log(`error: ${err}`);
                //req.flash('error_message',err);
                res.send({error_message: err});
            }
        });
    },

    verifyEmail:(req, res)=>{
        const user = User.findOne({verificationToken: req.query.token})
        if(user){
            user.isVerified = true
            user.emailToken = null
        }

        res.redirect('/login');
    },

    login:(req, res, next)=>{
        passport.authenticate("local", (err, isUser, info)=>{
            if(err){
                res.send({message: err})
            }
            console.log(isUser)

            if(!isUser){
                return failureRspMsg(res, 'No User exists', 200 , null)
            }else{
                //successfuly authenticated if there's a user, login the user
                req.logIn(isUser, (err)=>{
                    if(!err){
                        console.log(`The request user:\n ${req.user}`);
                        return successRspMsg(res, 'SuccessFully Authenticated', 200 ,user)
                    }
                })
            }
        })(res, res, next);
    },

    logout:(req,res)=>{
        req.logout();
        //req.flash('success_message', "Logged out")
        res.send({'logout-success': true});
    },


    getUser:(req,res)=>{
        // console.log(req.params)
        User.findById(req.params.id, (err, userIndb)=>{
            if(!err){
                res.send({userIndb});
            }else{
                res.send({errMsg:err})
            }
        })
    },

    updateUser:(req,res)=>{
        console.log(`req body: ${req.body}` )
        const {firstName, lastName, email, addressLine1, addressLine2, city, state} = req.body

        //explicitly set new-- to get the new version of the doc, after the update is applied:
        User.findByIdAndUpdate(req.params.id, {firstName, lastName, email, addressLine1, addressLine2, city, state}, {new: true} , async (err, updatedUser)=>{
            if(!err){
                console.log(updatedUser)
                return successRspMsg(res , 'Updated user successfully', 200, updatedUser )
            }else{
                return failureRspMsg(res , 'User not updated', 400, err)
            }
        })
    }


}


function login(){

}