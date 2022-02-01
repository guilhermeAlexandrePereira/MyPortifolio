const express = require("express");

const bodyParser = require("body-parser");

const api = require("./backend/routes");

const app = express();

app.use(bodyParser.json());

app.get("/", (req, res) =>{
    res.json({
        "sucess": true
    });
});

app.use("/api", api);


const port = 3080;
app.listen(port);


// mongo url conection: mongodb+srv://portifolio:<password>@cluster0.tylei.mongodb.net/myFirstDatabase?retryWrites=true&w=majority