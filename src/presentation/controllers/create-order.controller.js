const createOrderApi = require("../../infra/api/culqi/create-order.api");

const handler = async (req, res) => {
  const order = await createOrderApi();
  res.json({ message: "Hello, world!", order });
};

module.exports = {
  handler,
  route: "/checkout/create-order",
  method: "post",
};
