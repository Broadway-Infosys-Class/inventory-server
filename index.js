const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
const port = 4000;
app.use(express.json());
app.use(cors());

mongoose.connect("mongodb://localhost/8amInventory", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const connectionRef = mongoose.connection;

connectionRef.on("open", () => {
  console.log("Connection open");
});

const itemRoutes = require("./routes/items");
app.use("/api/item", itemRoutes);

app.listen(port, () => {
  console.log("server listening to port ", port);
});
