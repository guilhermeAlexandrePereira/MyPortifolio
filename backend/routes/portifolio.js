const res = require("express/lib/response");
const router = require("express").Router();
const Portifolio = require("../models/Portifolio");

// criar portifolio
router.post("/", async (req, res) => {
    const portifolio = new Portifolio({
        title: req.body.title,
        description: req.body.description
    });

    try{
        const savedPortifolio = await portifolio.save()
        res.json({
            success: true,
            data: savedPortifolio
        })
    }catch(err){
        res.json({
            success: false,
            data: err
        })
    }
    

//    portifolio
//    .save()
//    .then((data) => {
//        res.json({
//            sucess: true,
//           data
//        })
//    })
//    .catch((err) => {
//        res.json({
//            sucess: false,
//            message: err
//        })
//    })
}) 

// ler todos os portifolios
router.get("/", async (req, res) => {
    try{
        const portifolio = await Portifolio.find();

        res.json({
            success: true,
            data: portifolio
        });
    }catch(err){
        res.json({
            success:false,
            message: err,
        })

    }

});

//READ 
//ler apenas  portifolio
router.get("/:slug", async (req, res) => {
    try {
        const portifolio = await Portifolio.findOne({ slug: req.params.slug });
        res.json({
            success: true,
            data: portifolio
        });

    } catch (err) {
        res.json({
            success: false,
            message: err,

        });
    }
});

module.exports = router