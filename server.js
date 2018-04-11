const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 4040;

app.use(express.static(__dirname));

app.listen(PORT, () => {
  console.log(`Express server listening on http://localhost:${PORT}`);
});