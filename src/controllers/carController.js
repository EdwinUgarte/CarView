const carModel = require("../models/carModel");

//? Controlador para obtener todos los autos
const getAll = async (req, res) => {
  try {
    let respuesta = await carModel.find().exec();
    res.status(200).send(respuesta);
  } catch (error) {
    res.status(500).send({
      message: "No se pudieron obtener los datos de los autos.",
    });
  }
};

//? Controlador para obtener un auto mediante el id
const getById = async (req, res) => {
  const { id } = req.params;
  try {
    let respuesta = await carModel.findById(id);
    res.status(200).send(respuesta);
  } catch (error) {
    res.status(404).send({
      message: "El auto no fue encontrado.",
    });
  }
};

//? Controlador para obtener un auto mediante la marca
const getByMarca = async (req, res) => {
    const { marca } = req.params;
    try {
      let respuesta = await carModel.find({marca: marca.toUpperCase()});
      res.status(200).send(respuesta);
    } catch (error) {
      res.status(404).send({
        message: "El auto no fue encontrado.",
      });
    }
  };

//? Controlador para insertar un auto
const postAuto = async (req, res) => {
  const auto = carModel(req.body);
  auto.nombre = auto.nombre.toUpperCase();
  auto.marca = auto.marca.toUpperCase();
  auto.tipo = auto.tipo.toUpperCase();

  try {
    respuesta = await auto.save(auto);
    res.status(200).send({
      respuesta,
      message: "Guardado con exito.",
    });
  } catch (error) {
    res.status(500).send({
      message: "No se realizo correctamente la inserción.",
    });
  }
};

//? Controlador para actualizar un auto
const updateAuto = async (req, res) => {
  const { id } = req.params;
  const update = carModel(req.body);

  try {
    await carModel.findByIdAndUpdate(id, update);
    res.status(200).send({
      update,
      message: "Se actualizo con exito.",
    });
  } catch (error) {
    res.status(500).send({
      message: "Ocurrio un error al actualizar",
    });
  }
};

//? Contolador para eliminar un auto
const deleteAuto = async (req, res) => {
  const { id } = req.params;

  try {
    await carModel.findByIdAndDelete(id);
    res.status(200).send({
      message: "El auto se elimino con exito.",
    });
  } catch (error) {
    res.status(500).send({
      message: "El auto no se pudo eliminar.",
    });
  }
};

module.exports = {
  getAll,
  getById,
  postAuto,
  updateAuto,
  deleteAuto,
  getByMarca
};
