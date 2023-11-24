const express = require("express");
const app = express();
const port=8080;

app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.listen(port,()=>{
    console.log(`Listening for port ${port}`);
})

app.post("/dform",(req,res)=>{
    let {name , email, website ,java,Backend,React,message}=req.body;
    console.log(req.body);
    res.send(`Thankyou ${name} I am surely connect with you thanks for visiting`);
})