require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const userRouter = require("./routers/users.router");
//*Inicializamos constantes con la configuracion
const BD_USER = process.env.BD_USER;
const BD_PASS = process.env.BD_PASS;
const BD_HOST = process.env.BD_HOST;
const BD_NAME = process.env.BD_NAME;
const PORT = process.env.PORT;

const URL = `mongodb+srv://${BD_USER}:${BD_PASS}@${BD_HOST}/${BD_NAME}?retryWrites=true&w=majority`;

const app = express();
app.use(express.json());

app.use("/users", userRouter);

mongoose
  .connect(URL)
  .then(() => {
    console.log("estamos conectados a BD");
    app.listen(PORT, () => {
      console.log("Servidor ejecutandose en el puerto", PORT);
    });
  })
  .catch((error) => {
    console.log(error);
  });
