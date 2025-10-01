// Arquivo principal (ex: index.js ou server.js)

// Parte 1: Imports e Configuração Inicial
import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
// O VendaMensal é o Model (Schema) que deve estar definido em "./VendaMensal.js"
import VendaMensal from "./VendaMensal.js"; 

dotenv.config();

const app = express();
const PORT = 3000;

// Middleware para receber JSON no corpo das requisições
app.use(express.json());

// Função de Conexão com o Banco de Dados
const connectDB = async () => {
    try {
        // A URL de conexão (MONGO_URI) é lida de um arquivo .env (dotenv)
        mongoose.connect(process.env.MONGO_URI);
        console.log("Conectado ao MongoDB");
    } catch (error) {
        console.log("Erro ao conectar com o MongoDB", error);
    }
};

// Executa a conexão
connectDB();

// ==========================================================
// ROTAS CRUD (API ENDPOINTS)
// ==========================================================

// ROTA: CREATE
// Método: POST /vendas
app.post("/vendas", async (req, res) => {
    try {
        // Usa o método .create() do Mongoose para criar e salvar no DB
        const novoUsuario = await VendaMensal.create(req.body);
        res.json(novoUsuario);
    } catch (error) {
        res.json({ error: error.message });
    }
});

// ROTA: READ (Buscar Todos)
// Método: GET /vendas
app.get("/vendas", async (req, res) => {
    try {
        // Usa o método .find() do Mongoose para buscar todos os documentos
        const vendasMensais = await VendaMensal.find();
        res.json(vendasMensais);
    } catch (error) {
        res.json({ error: error.message });
    }
});

// ROTA: UPDATE (Atualizar por ID)
// Método: PUT /vendas/:id
app.put("/vendas/:id", async (req, res) => {
    try {
        // Usa findByIdAndUpdate para encontrar o documento pelo ID da URL e atualizar com os dados do corpo (req.body)
        const vendaMensalAtualizada = await VendaMensal.findByIdAndUpdate(
            req.params.id,
            req.body
        );
        res.json(vendaMensalAtualizada);
    } catch (error) {
        res.json({ error: error.message });
    }
});

// ROTA: DELETE (Deletar por ID)
// Método: DELETE /vendas/:id
app.delete("/vendas/:id", async (req, res) => {
    try {
        // Usa findByIdAndDelete para encontrar e remover o documento
        const vendaMensalDeletada = await VendaMensal.findByIdAndDelete(
            req.params.id
        );
        res.json(vendaMensalDeletada);
    } catch (error) {
        res.json({ error: error.message });
    }
});


// Parte Final: Inicialização do Servidor
app.listen(PORT, () => console.log(`O servidor está rodando na porta ${PORT}`));