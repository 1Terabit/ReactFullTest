//FIXME: 1. Crea una aplicación simple de Node.js con Express que tenga una ruta GET '/saludo' que devuelva un mensaje de saludo. 

const express = require("express");

const app = express();

app.get("/greeting", (req, res) => {
  res.send("Hello! ");
});

app.listen(3000, () => {
  console.log("Server listening on port 3000");
});



//FIXME: 2. Explica la función de un middleware en Express y proporciona un ejemplo práctico. 

/* 
    Un middleware es una función que se ejecuta entre la solicitud y la respuesta en una aplicación Express y se puede usar para

    1. Validar la solicitud
    2. Modificar la solicitud o la respuesta
    3. Manejar errores
    4. Registrar la actividad
    */

const express = require("express");

const app = express();

const authMiddleware = (req, res, next) => {
  // Validate user authentication
  if (!req.headers.authorization) {
    return res.status(401).send("Unauthorized");
  }

  next();
};

app.use(authMiddleware);

app.get("/protected-route", (req, res) => {
  // The route can only be accessed if authentication is valid
  res.send("Access granted!");
});

app.listen(3000, () => {
  console.log("Server listening on port 3000");
});



//FIXME: 3. Convierte el siguiente código de callback a una promesa en Node.js. 

const fs = require("fs");

const readFile = () => {
  return new Promise((resolve, reject) => {
    fs.readFile("file.txt", "utf8", (err, data) => {
      if (err) reject(err);
      resolve(data);
    });
  });
};

readFile()
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.error(err);
  });



//FIXME: 4. ¿Cómo manejarías errores asíncronos en Node.js? Proporciona un ejemplo. 

//se pueden usar bloques try...catch o el módulo async/await
 
const fs = require("fs");

const tryCatchExample = async () => {
  try {
    const data = await fs.promises.readFile("file.txt", "utf8");
    console.log(data);
  } catch (err) {
    console.error(err);
  }
};

tryCatchExample();


//FIXME: 5. Explica cómo funciona la autenticación JWT y cómo podrías implementarla en una aplicación Node.js.

/*
La autenticación JWT (JSON Web Token) es un método para verificar la identidad de un usuario y se crea un token firmado con información del usuario y se envía con cada solicitud el servidor verifica la firma del token para autenticar al usuario

Implementación en Node.js:

   1. Instalar las librerías jsonwebtoken y dotenv
   2. Crear un archivo .env con la clave secreta del token
   3. Generar el token en el servidor
   4.  Enviar el token con la solicitud en el encabezado Authorization
   5.  Verificar el token en el servidor antes de procesar la solicitud
*/

//FIXME: 6. Crea un modelo de mongoose para una entidad "Usuario" con campos de nombre, correo electrónico y contraseña. 

const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
});

const User = mongoose.model("User", userSchema);

module.exports = User;

//FIXME: 7. ¿Qué es Jest y cómo se usaría para realizar pruebas unitarias en una aplicación Node.js? 

/* 
Jest es un framework de pruebas unitarias para JavaScript se puede usar 
para probar diferentes aspectos de una aplicación Node.js, como la lógica de negocio, 
la interacción con la base de datos o la API 
*/

const { sum } = require("../utils");

describe("Sum function", () => {
  it("should return the sum of two numbers", () => {
    const result = sum(1, 2);
    expect(result).toBe(3);
  });
});

