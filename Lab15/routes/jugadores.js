const express = require('express');
//const app = express();
const router = express.Router();

const path = require('path');

const jugadoresController = require('../controllers/jugadores_controller');


router.get('/nuevo-jugador', jugadoresController.getNuevoJugador);

router.post('/nuevo-jugador', jugadoresController.postNuevoJugador);

router.get('/', jugadoresController.get);

module.exports = router;  