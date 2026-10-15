const express = require("express");
const dbConnection = require("./utils/database")
const app = express();
const User = require("./modal/user")

app.use(express.json());

const { userAuthorization } = require("./utils/auth");

app.use("/user",userAuthorization)

app.get("/login", (req, res)=> {
    res.status(200).send("user authenticated");
})
dbConnection().then(()=> {
    console.log("DB connected successfully");
    app.listen(3000, ()=> {
    console.log("node server created at port 3000");
})
}).catch((err)=> {
    console.log(err , "error=======")
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

//add user to data base
app.post("/signUp",async(req, res)=> {
    try{
        console.log(req.body);
        let user = new User(req.body);
        console.log("signup successfulll" , user)
        await user.save();
    }catch(err){
        console.log("err",err)
    }
})

//GET all items from DB
app.get("/user", async(req, res)=>{
    try{
        let user = await User.find({})
        res.send(user);
        
    }catch(err){
        console.log(err , "err");
    }
});

//GET specific items for DB 
app.get("/item", async(req, res)=>{
    const userName = req.body.userName;;
    console.log(req.body, "body");
    try{
        let user = await User.find({userName : userName})
        //findOne return first available item from DB
        res.send(user);
    }catch(err){
        console.log(err , "err");
    }
});