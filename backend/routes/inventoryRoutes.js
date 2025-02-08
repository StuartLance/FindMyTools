const express = require("express");
const router = express.Router();
const pool = require("../config/db");

// Get all products
router.get("/products", async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM products");
    res.json(result.rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Add a new product
router.post("/products", async (req, res) => {
  const { name, brand, size, stock_quantity, price } = req.body;
  try {
    const result = await pool.query(
      "INSERT INTO products (name, brand, size, stock_quantity, price) VALUES ($1, $2, $3, $4, $5) RETURNING *",
      [name, brand, size, stock_quantity, price]
    );
    res.status(201).json(result.rows[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
