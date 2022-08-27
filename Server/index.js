const express = require("express");
const bodyParser = require("body-parser");

const cors = require("cors");
const connDb = require("./utils/db_connection.js");

const regionRouter = require("./routes/regions.js");
const provincesRouter = require("./routes/provinces.js");
const categoriesRouter = require("./routes/categories.js");

console.log(connDb);

const app = express();
const PORT = 5000;

app.use(cors());
app.use(bodyParser.json());

// Routes declarations
app.use("/", regionRouter);
app.use("/", provincesRouter);
app.use("/", categoriesRouter);

// npm start
app.listen(PORT, () => {
  console.log(`Server Listen to port http://localhost:${PORT}`);
});
