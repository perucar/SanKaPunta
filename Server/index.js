const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const connDb = require("./utils/db_connection.js");

const categoriesRouter = require("./routes/categories.js");
const provinceInfoRouter = require("./routes/provinceInfo.js");
const provincesRouter = require("./routes/provinces.js");
const regionRouter = require("./routes/regions.js");

console.log(connDb);

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// Routes declarations
app.use("/", categoriesRouter);
app.use("/", provincesRouter);
app.use("/", provinceInfoRouter);
app.use("/", regionRouter);

// npm start
app.listen(PORT, () => {
  console.log(`Server Listen to port http://localhost:${PORT}`);
});
