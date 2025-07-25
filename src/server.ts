import express from 'express';
import dotenv from 'dotenv';
dotenv.config();

import produtosRouter from './routes/produtos';

const app = express();
const PORT = process.env.PORT || 3000;

app.use('/produtos', produtosRouter);

app.get('/', (req, res ) => {
    res.send('Servidor online!')
})

app.listen ( PORT, () => {
    try {
        console.log(`Servidor rodando na porta ${PORT}`);
    }
    catch (error) {
        console.error('Erro ao iniciar o servidor:', error);
    }
})


