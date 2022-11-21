const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
const app = express();
const post = require("./BackEnd/routes/posts");
const path = require("path");

dotenv.config();
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());
app.get("/test", (req, res) => {
  res.send("Hello to Trash-Terminator");
});

app.use("/posts", post);

if (process.env.ENV === "production") {
  app.use(express.static(path.join(__dirname, "FrontEnd/build")));
  app.get("*", (req, res) =>
    res.sendFile(path.resolve(__dirname, "FrontEnd", "build", "index.html"))
  );
} else {
  app.get("/", (req, res) => {
    res.send("Hello to Trash-Terminator");
  });
}

const PORT = process.env.PORT || 5000;
const url = process.env.CONNECTION_URL;
mongoose
  .connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() =>
    app.listen(PORT, () => console.log(`server running on port: ${PORT}`))
  )
  .catch((error) => console.log(error.message));
