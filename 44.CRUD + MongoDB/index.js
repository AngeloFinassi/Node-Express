// Parte 1: Imports e Configuração Inicial
import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
// O VendaMensal é o Model (Schema) que deve estar definido em "./VendaMensal.js"
import VendaMensal from "./VendaMensal.js"; 

//vai buscar info em file .env
dotenv.config();

const app = express();
const PORT = 3000;

// Função de Conexão com o Banco de Dados
//async para usar await
const connectDB = async () => {
    // tenho q esperar a promessa
    try{
        await mongoose.connect(process.env.MONGO_URI)
        console.log("Connected with MongoDB")
    } catch (error) {
        console.log("Error to connect with MongoDB", error)
    }
    
}

// Executa a conexão
connectDB()

// ==========================================================
// ROTAS CRUD (API ENDPOINTS)
// ==========================================================

// Middleware para receber JSON no corpo das requisições
app.use(express.json());


// ROTA: CREATE
// Método: POST /vendas
app.post("/vendas", async (req, res) => {
    try {
        const NewSale = await VendaMensal.create(req.body)
        res.status(201).json(NewSale)
    } catch (error) {
        res.status(400).json({error: error})
    }
    
});

// ROTA: READ (Buscar Todos)
// Método: GET /vendas
app.get("/vendas", async (req, res) => {
    try {
        const MonthSells = await VendaMensal.find()
        res.json(MonthSells)
    } catch (error) {
        res.status(400).json({error: error})
    }
});

// ROTA: UPDATE (Atualizar por ID)
// Método: PUT /vendas/:id
//req.params.id = :id
app.put("/vendas/:id", async (req, res) => {
    try {
        //id q vou procurar? req.params.id
        //oq eu quero mudar? req.body ->json q foi enviado para Endpoint
        //new sempre traz o novo, oq ja foi alterado
        const NewSaleMonthly = await VendaMensal.findByIdAndUpdate(req.params.id, req.body, {new: true})
        res.json(NewSaleMonthly)
    } catch (error) {
        res.status(400).json({error: error})
    }
});

// ROTA: DELETE (Deletar por ID)
// Método: DELETE /vendas/:id
app.delete("/vendas/:id", async (req, res) => {
    try {
        const DeleteSale = await VendaMensal.findByIdAndDelete(req.params.id)
        res.json(DeleteSale)
    } catch (error) {
        res.status(400).json({error: error})
    }
});


// Parte Final: Inicialização do Servidor
app.listen(PORT, () => console.log(`O servidor está rodando na porta ${PORT}`));