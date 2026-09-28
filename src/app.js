const express = require("express");
const app = express();

const { userAuthorization } = require("./utils/auth");

app.use("/user",userAuthorization)

app.get("/login", (req, res)=> {
    res.status(200).send("user authenticated");
})

//error handling
app.get("/user",(err ,req, res, next)=>{
    if(err){
        res.status(500).send("Something went wrong");
    }
    res.send("user route");
    try{
        throw new Error("abcd");
    }catch(err){
        res.status(500).send("Something went wrong");
    }
})

//regex 
app.get(/^\/shehbaz(abdul)?wa+si/,(req, res)=> {
    res.send("rex experession route");
})

//dynamic route
app.get("/:user/:password", (req, res)=> {
    console.log(req.params);
    res.send("user and password");
})

app.listen(3000, ()=> {
    console.log("node server created at port 3000");
})