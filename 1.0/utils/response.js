const successResponseMessage= (res, message ,success, data)=>{
    res.status(success).json({
        success:true,
        message,
        data
    })
}

const failureResponseMessage= (res, message ,success, data)=>{
    res.status(success).json({
        success:false,
        message,
        data
    })
}


module.exports.successRspMsg = successResponseMessage;
module.exports.failureRspMsg = failureResponseMessage;