const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const items = require("./routes/api/items");
const users = require("./routes/api/users");
const auth = require("./routes/api/auth");
const app = express();
const config = require("config");


// Bodyparser Middleware
app.use(express.json());
// for Production require("./config/keys").mongoURI//
//for dev config.get('mongoURI') //
// DB Config

const db = config.get('mongoURI');
//Connect to Mongo
mongoose.set("useUnifiedTopology", true);
mongoose
  .connect(db, { useNewUrlParser: true, useCreateIndex: true })
  .then(() => console.log("MongoDB Connected..."))
  .catch((err) => console.log(err));

// Use Routes
app.use("/api/items", items);
app.use("/api/users", users);
app.use("/api/auth", auth);
// Serve static assets if in production
if (process.env.NODE_ENV === "production") {
  // Set static folder
  app.use(express.static("client/build"));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

// variable for port
const port = process.env.PORT || 5000;
//express listen for port and call back a log //
app.listen(port, () => console.log(`Server started on PORT ${port}`));
