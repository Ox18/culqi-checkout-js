const handler = async (req, res) => {
  res.json({ message: "Hello, world!" });
};

module.exports = {
  handler,
  route: "/test",
  method: "get",
};
