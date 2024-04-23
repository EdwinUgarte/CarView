const express = require("express");
const mongoose = require("mongoose");
const router = require('./src/routes/carRoutes')
const cors  = require('cors')
require("dotenv").config();


const app = express();
const port =  process.env.PORT || 3000;

app.use(cors({
    origin: "*",
    methods: ["GET", "POST", "PUT", "DELETE"]
}));


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
