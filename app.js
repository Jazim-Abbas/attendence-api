const express = require("express");
require("express-async-errors");
const allRoutes = require("./drivers/routes");
const catchUnhandleExceptions = require("./drivers/middlewares/exception-handling");

const app = express();
app.use(express.json());
app.use("/", allRoutes);
app.use(catchUnhandleExceptions);

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT} ...`);
});
