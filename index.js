const express = require("express");
const app = express();
const port = 3000;
const path = require("path");

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.use("/images", express.static(path.join(__dirname, 'images')))

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
