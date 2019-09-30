const path = require('path');
const express = require('express');

const app = express();

const PORT = process.env.PORT || 8080;

app.use(express.static(path.join(__dirname, 'client/build')));

app.all('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'client/build/index.html'));
});

app.listen(PORT, (req, res) => {
  console.log(`Static built application started running in port: ${PORT}`);
});
