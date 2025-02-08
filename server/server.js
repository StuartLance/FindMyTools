const express = require('express');
const inventoryRoutes = require('./routes/inventoryRoutes');
const app = express();

app.use(express.json());

app.use('/api/inventory', inventoryRoutes);

app.listen(5000, () => {
  console.log('Server running on port 5000');
});
