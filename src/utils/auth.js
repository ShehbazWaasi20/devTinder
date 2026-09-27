const userAuthorization = (req, res, next)=> {
    const token = "xyz";
    const isAuthorized = token === "xyz";
    if(isAuthorized){
      next();
    }else{
        res.status(401).send("user unAuthorized");
    }
}

module.exports = {
    userAuthorization
}