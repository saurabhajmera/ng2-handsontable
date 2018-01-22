var compression = require('compression')
const express = require("express");
const path = require('path');

const app = express();

app.use(compression());


// Point static path to dist
app.use(express.static(path.join(__dirname, 'demo/dist')));

app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, 'demo/dist/index.html'));
});

// This endpoint is required to report health when
// Elastic Load Balancers (ELBs) are used
app.get("/healthcheck", function (req, res) {
  res.status(200).send("OK!");
});

// Catch all other routes and return the index file
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'demo/dist/index.html'));
});


app.listen(7101, function () {
  console.log("Example app listening on port 7101!");
});
