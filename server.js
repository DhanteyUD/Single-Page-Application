const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3060;

app.use(
  '/static',
  express.static(path.resolve(__dirname, 'frontend', 'static'))
);

app.get('/*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'frontend', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`server running on port ${PORT}...`);
});
