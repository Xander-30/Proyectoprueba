

/*levantando el servidor con puerto 8080*/
const express = require("express")
const app = express()/*Se iguala a express para que se conecte a un servidor*/
const port = 8080

/*Se escucha el puerto del servidor*/
app.listen(port, function () {
  console.log("Example app listening on port 8080!")
})

/*Se obtiene una respuesta del servidor para ver si hay conexion      "" significa que esta en la misma ruta de mi carpeta views*/     
app.get("", function (req, res) {
  res.send('<h1>Hello alexander herrera </h1>!');
  
});
