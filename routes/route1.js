const express = require("express");

const route = express.Router();

route.get("/home",(req,res)=>{
    res.json({
        "msg":"This is home route..."
    })
})

module.exports = {
    route
}