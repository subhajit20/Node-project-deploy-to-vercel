const express = require("express");
const path = require("path");
const cors = require("cors")
const app = express();
const PORT = process.env.PORT || 3001;
console.log(__dirname);


app.use(cors({
    origin:"*",
    methods:["GET","POST","PUT","DELETE"]
}));
app.use(express.json());
app.use(express.urlencoded({
    extended:false
}));

const public = path.join(__dirname,'public/index.html');
console.log(public)
app.get('/', (req, res) => {
    res.sendFile(public);
})

app.post("/",(req,res)=>{
    console.log(req.body.name)
    res.json({
        "name":req.body.name
    })
})

app.listen(3000,()=>{
    console.log("App is running  at http://localhost:3000...")
})

module.exports = app