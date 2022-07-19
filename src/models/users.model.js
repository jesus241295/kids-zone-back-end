const mongoose = require("mongoose");

//Schema define las reglas del modelo
const usersSchema = new mongoose.Schema({
  name: {
    type: String,
    minlength: 3,
  },
  lastName: String,
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    minlength: 3,
  },
  city: String,
  state: String,
});

// modelo creado
const CreateUsers = mongoose.model("users", usersSchema);

//Exportamos el modelo de CreateUsers unicamente, ya que el schema solo lo requerimos aqui
module.exports = CreateUsers;
