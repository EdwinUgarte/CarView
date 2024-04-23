const Router = require('express');
const { getAll, getById, postAuto, updateAuto, deleteAuto, getByMarca } = require('../controllers/carController');

const router = Router();

//? Route para obtener todos
router.get('/cars', getAll);


//? Route para obtener uno por id
router.get('/cars/:id', getById);

//? Route para obtener uno por id
router.get('/cars/marca/:marca', getByMarca);


//? Route para insertar uno
router.post('/cars', postAuto)


//? Route para actualizar
router.put('/cars/:id', updateAuto);

//? Route para eliminar
router.delete('/cars/:id', deleteAuto)



module.exports = router;