const mongoose = require("mongoose");

mongoose.connect(process.env.MONGO_URL_CONCTION, () => {
    console.log("pai ta ON no mongodb");
})
