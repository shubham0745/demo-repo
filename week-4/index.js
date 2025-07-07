const express = require('express');
const app = express();
const PORT = 3001;

app.get('/todos', (req, res) => {
  res.json([{ id: 1, task: "Test route working", done: false }]);
});



app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});













