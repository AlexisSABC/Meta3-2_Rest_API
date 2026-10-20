const express = require('express');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('../swagger.json');

const jugadoresRoutes = require('./routes/jugadores.routes');
const rostersRoutes = require('./routes/rosters.routes');
const auxiliaresRoutes = require('./routes/auxiliares.routes');

const app = express();
app.use(express.json());

// Documentación OpenAPI (RNF-01)
app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// Rutas auxiliares sin prefijo /v1 adicional (o integradas bajo /api/v1)
app.use('/api/v1', auxiliaresRoutes);
app.use('/api/v1/jugadores', jugadoresRoutes);
app.use('/api/v1/rosters', rostersRoutes);

// Manejador de rutas no encontradas (404)
app.use((req, res) => {
  res.status(404).json({ error: 'Ruta no encontrada' });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
  console.log(`Documentación OpenAPI disponible en http://localhost:${PORT}/docs`);
});