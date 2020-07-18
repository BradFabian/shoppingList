const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const path = require('path');
const items = require("./routes/api/items");

const app = express();

// Bodyparser Middleware
app.use(bodyParser.json());
//process.env.mongoURI || require("./config/keys").mongoURI//
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
// Serve static assets if in production
if(process.env.NODE_ENV === 'production'){
  // Set static folder
  app.use(express.static('client/build'));

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  })
}

// variable for port
const port = process.env.PORT || 5000;
//express listen for port and call back a log //
app.listen(port, () => console.log(`Server started on PORT ${port}`));
