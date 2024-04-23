const express = require("express");
const mongoose = require("mongoose");
const router = require('./src/routes/carRoutes')
require("dotenv").config();


const app = express();
const port = process.env.PORT;

const conectBD = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Base de datos conectada");
  } catch (error) {
    console.log("Ocurrio un error en la conexión")
  }
};

conectBD();

app.use(express.json());
app.use('/api', router);



app.listen(port, () => {
  console.log("run server in port: ", port);
});
