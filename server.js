const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const items = require("./routes/api/items");

const app = express();

// Bodyparser Middleware
app.use(bodyParser.json());

// DB Config
const db = require("./config/keys").mongoURI;
//Connect to Mongo
mongoose.set("useUnifiedTopology", true);
mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => console.log("MongoDB Connected..."))
  .catch((err) => console.log(err));

// Use Routes
app.use("/api/items", items);

// variable for port
const port = process.env.PORT || 5000;
//express listen for port and call back a log //
app.listen(port, () => console.log(`Server started on PORT ${port}`));
