const mysql = require("mysql2");

const con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Tiger369!",
    database: "Golf Handicap"
});

con.connect((err) => {
    if (err) {
        console.error("Error connecting:", err.message);
        return;
    }
    console.log("Connected!");
});
