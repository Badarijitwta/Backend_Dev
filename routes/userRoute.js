const router = require("express").Router();

const {
  getUSers,
  getUsersById,
  getUsersByGenderandAge,
} = require("../controllers/userController");
const {
  validateSearchQuery,
} = require("../middlewares/validators/user.validator");
router
  .get("/search", validateSearchQuery, getUsersByGenderandAge)
  .get("/:uuid", getUsersById)
  .get("/", getUSers);

module.exports = router;
