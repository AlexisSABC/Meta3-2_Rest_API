const express = require('express');
const router = express.Router();
const controller = require('../controllers/rosters.controller');

router.get('/', controller.obtenerRosters);
router.get('/:id', controller.obtenerRosterPorId);
router.post('/', controller.crearRoster);
router.put('/:id', controller.actualizarRoster);
router.delete('/:id', controller.eliminarRoster);

// Rutas de asignación
router.get('/:id/jugadores', controller.obtenerJugadoresRoster);
router.post('/:id/jugadores', controller.asignarJugadorARoster);
router.put('/:id/jugadores/:id_jugador', controller.cambiarRolEnRoster);
router.delete('/:id/jugadores/:id_jugador', controller.quitarJugadorDeRoster);

module.exports = router;