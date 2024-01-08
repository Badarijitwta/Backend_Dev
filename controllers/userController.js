const { data } = require("../DB/users.json");
const { validateSchema } = require("../middlewares/validators/user.validator");

const getUSers = (req, res) => {
  res.json(data);
};

const getUsersById = (req, res) => {
  const { uuid } = req.params;
  // console.log(uuid);
  const result = data.find((x) => x.login.uuid === uuid);
  // console.log(result);
  result ? res.status(200).json(result) : res.sendStatus(404);
};

const getUsersByGenderandAge = (req, res) => {
  const gender = req.query.gender;
  const age = req.query.age;
  // console.log(age);
  if (gender && age) {
    const result = data.filter(
      (x) => x.gender === gender && Number(x.dob.age) === Number(age)
    );
    res.status(200).json(result);
  } else if (gender) {
    const result = data.filter((x) => x.gender === gender);
    res.json(result);
  } else if (age) {
    const result = data.filter((x) => Number(x.dob.age) === Number(age));
    res.status(200).json(result);
  } else {
    res.sendStatus(404);
  }
};

module.exports = { getUSers, getUsersById, getUsersByGenderandAge };
