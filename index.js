const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const authRoutes = require('./routes/authRoutes');

// Configurar variables de entorno
dotenv.config();

const app = express();
const PORT = process.env.PORT;

// Middlewares
app.use(cors());
app.use(express.json());

// Ruta principal para evitar error en Railway
app.get('/', (req, res) => {
  res.send('API funcionando correctamente');
});

// Rutas de autenticación
app.use('/api', authRoutes);

// Inicio del servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});
