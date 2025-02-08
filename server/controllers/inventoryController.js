const db = require('../config/db');

// Get all inventory items
exports.getAllInventory = async (req, res) => {
  try {
    const [rows] = await db.query('SELECT * FROM inventory');
    res.json(rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Database query failed' });
  }
};

// Add a new inventory item
exports.addInventoryItem = async (req, res) => {
  const { part_name, description, quantity, unit_price, supplier } = req.body;
  try {
    const [result] = await db.query(
      'INSERT INTO inventory (part_name, description, quantity, unit_price, supplier) VALUES (?, ?, ?, ?, ?)',
      [part_name, description, quantity, unit_price, supplier]
    );
    res.json({ id: result.insertId });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to insert item' });
  }
};
