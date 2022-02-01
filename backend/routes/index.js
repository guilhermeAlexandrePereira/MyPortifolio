const { route } = require("express/lib/application");
const res = require("express/lib/response");

const router = require("express").Router();

const portifolio = require("./portifolio");

router.get("/", (req, res) => {
    res.json({
        success: false, 
        message: "please, do not call /api, it is for our server"
    })
})

router.use("/portifolio", portifolio);

module.exports = router;