const api = require("./instance");

const generateOrderNumber = () => {
  return Math.floor(Math.random() * 1000000000);
};

const expirateDate = (days) => {
  const date = new Date();
  date.setDate(date.getDate() + days);
  // in milliseconds
  return Math.floor(date.getTime() / 1000);
};

const createOrder = async () => {
  const data = {
    amount: 60000,
    currency_code: "PEN",
    description: " Venta de polo",
    order_number: "#prder-" + generateOrderNumber(),
    expiration_date: String(expirateDate(1)),
    client_details: {
      first_name: "Richard",
      last_name: "Hendricks",
      email: "richard@piedpiper.com",
      phone_number: "999999987",
    },
    confirm: true,
    metadata: {
      dni: "71702999",
    },
  };

  const response = await api.post("/orders", data);
  return response.data;
};

module.exports = createOrder;
