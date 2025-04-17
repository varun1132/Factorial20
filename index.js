let express = require("express");
let cors = require("cors");
let app = express();
app.use(cors());
app.get("/num",(req,res)=>{
    let str =req.query.number;
    let n=parseInt(str);
    if(n<=0)
    {
        res.send("Factorial is only possible for number greater than 0!");
        return;
    }
    let fact=1;
    for(let i=1;i<=n;i++)
    {
        fact=fact*i;
    }
    res.send(`Factorial of ${n} is ${fact}`);
})
app.get("/ping",(request,response)=>{
    response.send("Please Number toh dooo!");
})
app.listen(9000,()=>{
    console.log("Express is Ready!");
})