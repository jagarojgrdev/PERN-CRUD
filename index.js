const express = require('express');
const cors = require('cors');
const pool = require('./db'); // Configuración de la base de datos

const app = express();

// Middlewares
app.use(cors());
app.use(express.json()); // Parsear JSON

// Rutas
app.get('/', (req, res) => {
    res.send('Bienvenido al servidor PERN CRUD');
});

// Iniciar servidor
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});

// Crear un item
app.post('/items', async (req, res) => {
    try {
        const { name, description } = req.body;
        const newItem = await pool.query(
            "INSERT INTO items (name, description) VALUES ($1, $2) RETURNING *",
            [name, description]
        );
        res.json(newItem.rows[0]);
    } catch (err) {
        console.error(err.message);
    }
});

// Obtener todos los items
app.get('/items', async (req, res) => {
    try {
        const allItems = await pool.query("SELECT * FROM items");
        res.json(allItems.rows);
    } catch (err) {
        console.error(err.message);
    }
});

// Obtener un item por ID
app.get('/items/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const item = await pool.query("SELECT * FROM items WHERE id = $1", [id]);
        res.json(item.rows[0]);
    } catch (err) {
        console.error(err.message);
    }
});

// Actualizar un item
app.put('/items/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const { name, description } = req.body;
        await pool.query(
            "UPDATE items SET name = $1, description = $2 WHERE id = $3",
            [name, description, id]
        );
        res.json("Item actualizado correctamente");
    } catch (err) {
        console.error(err.message);
    }
});

// Eliminar un item
app.delete('/items/:id', async (req, res) => {
    try {
        const { id } = req.params;
        await pool.query("DELETE FROM items WHERE id = $1", [id]);
        res.json("Item eliminado correctamente");
    } catch (err) {
        console.error(err.message);
    }
});
