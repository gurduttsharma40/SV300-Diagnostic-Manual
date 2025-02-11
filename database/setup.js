const sqlite3 = require("sqlite3").verbose();
const db = new sqlite3.Database("./database/alarms.db");

// Create alarms table
db.run(
    `CREATE TABLE IF NOT EXISTS alarms (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        error_number TEXT UNIQUE,
        description TEXT,
        details TEXT
    )`,
    (err) => {
        if (err) console.error(err);
        else console.log("Database setup complete!");
    }
);

db.close();
