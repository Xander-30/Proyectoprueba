/*Se establece la conexion con mysql */

var mysql = require('mysql');/*Se equiere al modulo de msql*/

var connection = mysql.createConnection({
   host: 'localhost',
   user: 'root',
   password: '',
   database: 'flujo_cajanodejs',
   port: 3306
});

/*Esta es una conexion local x lo que no necesitare una contraseña*/

/*Se verifica la conexion del objeto connection con el metodo connect mediante una funcion*/
connection.connect(function(error){
   if(error){
   	   throw error;
   } else {
   	    console.log('Conexion correcta.');
   }
});


/*Probamos la conexion a la base mediante una insercion a nuestra tabla */





/*var query = connection.query('INSERT INTO personaje(nombre, apellido, biografia) VALUES(?, ?, ?)', ['Homero', 'Simpson', 'Esposo de Marge y padre de Bart, Lisa y Maggie.'], function(error, result){
   if(error){
      throw error;
   }else{
      console.log(result);
   }
 }
);

connection.end();*/



var query = connection.query('INSERT INTO artefactospa(id_artefacto,nombre_del_artefacto, descripcion_artefacto, color,tamaño,precio) VALUES(?, ?, ?, ?, ?, ?)', [' ','Licuadora', 'Licuadora Oster', 'negro','8','30,45.'], function(error, result){
   if(error){
      throw error;
   }else{
      console.log(result);
   }
 }
);
connection.end();






