const router = require("express").Router();

router.get("/", (req, res) => {
    //acess db
    const data = [ { 
        id: 1, 
        name: "panqueca",
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

module.exports = router