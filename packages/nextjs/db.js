import mysql from 'mysql2/promise';


// Extracting credentials from the service URI
//const uriParts = "mysql://avnadmin:AVNS_8F-Vme4N6XCRf4WEwef@mysql-1b29c5a2-eronoaik-8d.g.aivencloud.com:25353/defaultdb?ssl-mode=REQUIRED".split('@');
const host = "mysql-1b29c5a2-eronoaik-8d.g.aivencloud.com";
const port = 25353;
const dbName = "defaultdb";

// Configure the database connection
const pool = mysql.createPool({
    host:host,
    user: 'avnadmin',
    password: 'AVNS_8F-Vme4N6XCRf4WEwef',
    database: dbName,
    connectTimeout : 1000,
    waitForConnections:true,
    port,
   // port,
    ssl: {
        // // This is required for SSL connections
        // ca: fs.readFileSync('/path/to/ca-cert.pem'),
        // // You might need to adjust these depending on your setup
        // key: fs.readFileSync('/path/to/client-key.pem'),
        // cert: fs.readFileSync('/path/to/client-cert.pem'),
        rejectUnauthorized:false
    }
});

module.exports = pool;