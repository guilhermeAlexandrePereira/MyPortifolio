const mongoose = require("mongoose");

const { Schema } = mongoose;

const portifolioSchema = new Schema ( {
    title: {
        type: String,
        required: true
    }, 
    description: {
        type: String,
        required: true
    },
    createdAt: {
        type: data,
        default: Date.now()
    }
} );

module.exports = mongoose.model("portifolio", portifolioSchema);
