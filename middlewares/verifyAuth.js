const PASSWORD = process.env.ROUTE_PASSWORD;

const verifyAuth = (req, res, next) => {
  // console.log(PASSWORD);
  const { authorization } = req.headers;
  if (!authorization || authorization !== PASSWORD) {
    return res.status(403).json({ message: "Unauthorized Request" });
  }
  next();
};
module.exports = { verifyAuth };
