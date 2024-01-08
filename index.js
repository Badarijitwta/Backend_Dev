require("dotenv").config();
const express = require("express");
const app = express();
const PORT = 8082;
const currencyRoutes = require("./routes/currenciesRoute");
const userRoutes = require("./routes/userRoute");
const { verifyAuth } = require("./middlewares/verifyAuth");
// const { data } = require(".DB/response.json");

app
  .use(verifyAuth)
  .use("/currencies", currencyRoutes)
  .use("/users", userRoutes)

  .listen(PORT, () => {
    console.log(`Listening at ${8082}`);
  });
