let User = require('../../models/users');
let crypto = require('crypto');
const passport = require('passport');

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
                console.log(err);
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

    login:(req,res)=>{
        //req.flash('success_message', 'Welcome Back !')
        console.log(`The request user:\n ${req.user}`);
        res.send({'successful': true, currentUser: req.user});
    },

    logout:(req,res)=>{
        req.logout();
        //req.flash('success_message', "Logged out")
        res.send({'logout-success': true});
    }


}
