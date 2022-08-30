const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const connDb = require("./utils/db_connection.js");

const categoriesRouter = require("./routes/categories.js");
const friendsRouter = require("./routes/friends.js");
const postRouter = require("./routes/posts.js");
const provinceInfoRouter = require("./routes/provinceInfo.js");
const provincesRouter = require("./routes/provinces.js");
const regionRouter = require("./routes/regions.js");
const userRouter = require('./routes/usersRoute');

console.log(connDb);

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// Routes declarations
app.use("/", categoriesRouter);
app.use("/", friendsRouter);
app.use("/", postRouter);
app.use("/", provincesRouter);
app.use("/", provinceInfoRouter);
app.use("/", regionRouter);
app.use("/users", userRouter);

// npm start
app.listen(PORT, () => {
  console.log(`Server Listen to port http://localhost:${PORT}`);
});
