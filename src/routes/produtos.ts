import e, { Router } from 'express';
import connection from '../config/database';

const router = Router();

// Rota para obter todos os produtos
router.get('/produtos', (req, res) => {
    connection.query('SELECT * FROM produtos', (error, results) => {
        if (error) {
            return res.status(500).json({ error: 'Erro ao buscar produtos' });
        }
        res.json(results);
    });
});

export default router;