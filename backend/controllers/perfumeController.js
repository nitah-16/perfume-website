const db = require('../config/db');

// Get all perfumes
const getPerfumes = (req, res) => {
    db.query("SELECT * FROM perfumes", (err, results) => {
        if (err) return res.status(500).json(err);
        res.json(results);
    });
};

// Add perfume
const addPerfume = (req, res) => {
    const { name, description, price, image_url } = req.body;

    db.query(
        "INSERT INTO perfumes (name, description, price, image_url) VALUES (?, ?, ?, ?)",
        [name, description, price, image_url],
        (err, result) => {
            if (err) return res.status(500).json(err);
            res.json({ message: "Perfume added successfully" });
        }
    );
};

module.exports = { getPerfumes, addPerfume };