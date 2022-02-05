const mongoose = require("mongoose");

mongoose.connect(process.env.MONGO_URL_CONNECT, () => {
    console.log("pai não ta ON no mongodb");
})
