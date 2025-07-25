import e, { Router } from 'express'; // importando a rota de routes    
import connection from '../config/database'; // importando a conexão do banco de dados

const router = Router(); // instanciando a rota 
 
// Rota para obter todos os produtos
router.get('/produtos', (req, res) => {
    connection.query('SELECT * FROM produtos', (error, results) => { // linha de comando em SQL banco de dados
        if (error) {
            return res.status(500).json({ error: 'Erro ao buscar produtos' });
        }
        res.json(results); // resposta
    });
});

export default router;
