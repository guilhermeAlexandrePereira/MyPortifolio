const req = require("express/lib/request");
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

// update
// atualizar um slug
router.patch("/:slug", async (req, res) => {
    try{
        const updatedPortifolio = await Portifolio.updateOne({
            slug: req.params.slug
        },
        {
            title: req.body.title,
            description: req.body.description
        })

        res.json({
            success: true,
            updated: updatedPortifolio.nModified
        })
    }catch(err){
        res.json({
            success: false,
            message: err
        })
    }
})
// delete
// deletar um slug
router.delete("/:slug", async (req, res) => {
    try{
        const deletedPortifolio = await Portifolio.deleteOne({
            slug: req.params.slug
        });

        res.json({
            success: true,
            deleted: deletedPortifolio.deletedCount
        })
    }catch(err){
        res.json({
            sucess: false,
            message: err
        })
        
    }
})

module.exports = router