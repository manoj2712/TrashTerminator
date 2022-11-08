const express = require("express");
const app = express();
const mongoose = require("mongoose");
const port = 5000;
const url =
  "mongodb+srv://manoj272901:manoj2729@cluster0.ndwzwwd.mongodb.net/?retryWrites=true&w=majority";
    
mongoose
  .connect(url)
  .then((data) => {
    console.log("connection");
  })
  .catch((err) => {
    console.log(err);
  });
app.listen(port, () => {
  console.log(`port is listening ${port}`);
});
