import mongoose from "mongoose";

const prodSchema = new mongoose.Schema({
    nome: { type: String, required: true },
    categoria: { type: String, required: true },
    preco: { type: Number, min: 0, required: true }
}, { timestamps: true });

const prod = mongoose.model("Products", prodSchema);

//posso usar qualquer nome Prod, bibi se fose {prod} ai seria especifico
export default prod;