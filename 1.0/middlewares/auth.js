let middleWareObj = {
    isAuthenticated:(req,res, next)=>{
        if(req.isAuthenticated()){
            next()
        }else{
            req.flash('error_message', 'You need to be Logged In')
            res.redirect('/')
        }
    }

}

module.exports = middleWareObj;