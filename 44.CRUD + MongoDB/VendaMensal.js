import mongoose from 'mongoose';

// Definição do Schema (o molde)
const vendaMensalSchema = new mongoose.Schema({
    // Exemplo de campos necessários para uma Venda Mensal
    mes: { 
        type: String, 
        required: true,
        // Garante que o mês seja único (não salva a mesma venda duas vezes)
        //unique: true 
    }, 
    valor: { 
        type: Number, 
        required: true, 
        min: 0 
    },
    // Exemplo: número de transações no mês
    transacoes: { 
        type: Number, 
        default: 0 
    }
}, { timestamps: true });
// Criação do Model e exportação para uso no server.js
const VendaMensal = mongoose.model('VendaMensal', vendaMensalSchema);

export default VendaMensal;