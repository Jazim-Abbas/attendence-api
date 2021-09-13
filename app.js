const express = require("express");
const allRoutes = require("./drivers/routes");

const app = express();
app.use("/", allRoutes);

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT} ...`);
});
