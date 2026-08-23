const express = require("express");
const cors = require("cors");
require("dotenv").config();
const { Pool } = require("pg");

const PORT = 3000;
const app = express();

app.use(cors(express.static("public")));
app.use(express.static("public"));

const pool = new Pool ({
    connectionString: process.env.DATABASE_URL
});

app.get("/api/genre", async (req, res) => {
    const genre = req.query.searchGenre;

    console.log("Genre request received");
    console.log("Genre:", req.query.searchGenre);

    const result = await pool.query(
        "SELECT * FROM films WHERE LOWER(genre) = LOWER($1)", [genre]
    );

    res.json(result.rows);
})

app.listen(PORT, () => {
    console.log(`Server is running on PORT ${PORT}`);
})