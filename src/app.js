const express = require("express");
const app = express();

app.use("/",(req, res, next)=> {
    // res.send("basic route created");
    const token = "xy";
    const isAuthorized = token === "xyz";
    if(isAuthorized){
      next();
    }else{
        res.status(401).send("user unAuthorized");
    }
})

app.get("/user",(req, res)=>{
    res.send("user route");
})

app.get(/^\/shehbaz(abdul)?wa+si/,(req, res)=> {
    res.send("rex experession route");
})

app.get("/:user/:password", (req, res)=> {
    console.log(req.params);
    res.send("user and password");
})

app.listen(3000, ()=> {
    console.log("node server created at port 3000");
})