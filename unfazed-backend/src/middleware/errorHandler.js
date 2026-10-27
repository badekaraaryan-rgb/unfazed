module.exports=(err,req,res,next)=>{console.error(err);res.status(err.status||500).json({error:process.env.NODE_ENV==='production'?'Something went wrong':err.message||'Internal server error'})};
