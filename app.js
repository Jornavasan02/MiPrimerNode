const express = require('express');
const sql = require('msnodesqlv8');

const app = express();
const cadenaConexion = "Server=.;Database=AdventureWorks2012;Trusted_Connection=Yes;Driver={ODBC Driver 17 for SQL Server};";

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

app.get('/productosdb', (req, res) => {

    const query = "SELECT TOP 3 Name, ListPrice FROM Production.Product";

    sql.query(cadenaConexion, query, (error, resultados) => {

        if (error) {
            res.send("Error en la base de datos");
        } else {
            res.json(resultados);
        }
    });
});



app.listen(3000, () => {
    console.log("API conectada a SQL Server rodando en el puerto 3000...");
});






// -------------------------

app.listen(3000, () => {
    console.log("API de MiTiendita iniciada...");
});