const express = require('express');
const router = express.Router();
const controller = require('../controllers/jugadores.controller');

router.get('/', controller.obtenerJugadores);
router.get('/:id', controller.obtenerJugadorPorId);
router.post('/', controller.crearJugador);
router.put('/:id', controller.actualizarJugador);
router.delete('/:id', controller.eliminarJugador);

module.exports = router;