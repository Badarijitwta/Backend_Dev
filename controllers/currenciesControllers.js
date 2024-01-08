const { data } = require("../DB/response.json");

const getCurrencies = (req, res) => {
  const { min_value } = req.query;
  // console.log(min_value);
  if (min_value) {
    const result = data.filter((x) => Number(x.min_size) === Number(min_value));
    // console.log(result);
    res.json(result);
  } else {
    // res.send("No Data Found");
    res.json(data);
  }
};

const getid = (req, res) => {
  const { symbol } = req.params;
  const result = data.find((ele) => {
    return ele.id.toLowerCase() === symbol.toLowerCase();
  });
  res.json(result);
};

const getTitle = (req, res) => {
  res.send("<h1>Currency Database</h1>");
  res.sendStatus(200);
  // console.log(module);
};

module.exports = { getTitle, getCurrencies, getid };
