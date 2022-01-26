const express = require("express");

const app = express();

const port = 3080;

app.get("/", (req, res) =>{
    res.json({
        "sucess": true
    });
});

app.get("/portifolio", (req, res) => {
    //acess db
    const data = [ { 
        id: 1, 
        name: "lasanha",
        createdAt: "2022-01-19"
    }, 
{
    id: 2, 
    name: "pizza", 
    createdAt: "2022-01-19"
},
{
    id: 3,
    name: "guacamole",
    createdAt: "2022-01-19"
},
];

res.json({
    sucess: true, 
    data: data
});
});

app.listen(port);