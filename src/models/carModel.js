const mongoose = require('mongoose');

const carSchema = mongoose.Schema({
    nombre: {
        type: String,
        required: true,
    },
    marca: {
        type: String,
        required: true
    },
    año: {
        type: Number,
        required: true
    },
    tipo: {
        type: String,
        required: true
    },
    fotoUrl: {
        type: String,
        required: false
    },
    fecha: {
        type: Date,
        default: Date.now
    }



})

module.exports = mongoose.model("Car", carSchema);