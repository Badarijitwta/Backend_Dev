const router = require("express").Router();

const {
  getCurrencies,
  getid,
  getTitle,
} = require("../controllers/currenciesControllers");

router.get("/", getTitle).get("/data", getCurrencies).get("/:symbol", getid);

module.exports = router;
