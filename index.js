require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const morgan = require("morgan");
const dinosauresRoutes = requires("./routes/dinosaures");
const port = process.env.PORT;

require("./models/index");

app.use(express.json());
app.use(cors());
app.use(morgan("tiny"));
app.use("/dinosaures", dinosauresRoutes);

app.listen(port, () => {
  console.log(`Running on ${port}`);
});
