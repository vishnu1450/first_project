const express = require("express");
const app = express();
const importData = require("./data.json");
let port = process.env.PORT ||3001;
app.get("/", (req,res)=> {
    res.send("Hello World");
});
app.get("/players", (req,res)=> {
    res.send([
        {
            "Name": "Vishnu",
            "Age": 25,
            "Nationality": "Indian" 
        
        },
        {
            "Name": "Sanjeev",
            "Age": 24,
            "Nationality": "Indian" 
        }
        ]);
});
app.listen(port,() => {
console.log(`Example app is listening on port http://localhost:${port}`);
});
