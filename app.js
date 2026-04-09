// 1. Importamos el paquete nativo de Microsoft directamente (despedimos a mssql)
const sql = require('msnodesqlv8');

// 2. La Cadena de Conexión pura e inalterable
const cadenaConexion = "Server=.;Database=AdventureWorks2012;Trusted_Connection=Yes;Driver={ODBC Driver 17 for SQL Server};";

// 3. La consulta que queremos hacer
const query = "SELECT TOP 3 Name, ProductNumber, ListPrice FROM Production.Product";

console.log("⏳ Evadiendo al intermediario y conectando directo a Windows...");

// 4. Ejecutamos la orden directa
sql.query(cadenaConexion, query, (error, resultados) => {
    if (error) {
        console.log("❌ Error:", error.message);
    } else {
        console.log("✅ ¡Conexión exitosa a AdventureWorks2012!");
        console.log("📦 Aquí están 3 productos de tu inventario:");
        console.log(resultados);
    }
});