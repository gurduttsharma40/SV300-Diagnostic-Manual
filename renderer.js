const sqlite3 = require("sqlite3").verbose();

// Connect to SQLite database
const db = new sqlite3.Database("./database/alarms.db");

// Function to search alarms
function searchAlarms() {
    let query = document.getElementById("searchBox").value;
    db.all("SELECT * FROM alarms WHERE error_number LIKE ? OR description LIKE ?", [`%${query}%`, `%${query}%`], (err, rows) => {
        if (err) {
            console.error(err);
            return;
        }

        let resultsDiv = document.getElementById("results");
        resultsDiv.innerHTML = rows.map(row => `<p><strong>${row.error_number}:</strong> ${row.description} - ${row.details}</p>`).join("");
    });
}

// Function to add a new alarm
function addAlarm() {
    let errorNumber = document.getElementById("alarmNumber").value;
    let description = document.getElementById("description").value;
    let details = document.getElementById("details").value;

    db.run("INSERT INTO alarms (error_number, description, details) VALUES (?, ?, ?)", [errorNumber, description, details], (err) => {
        if (err) {
            console.error(err);
            return;
        }
        alert("Alarm added successfully!");
    });
}
