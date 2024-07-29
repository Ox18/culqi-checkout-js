const generateOrderNumber = () => {
  return Math.floor(Math.random() * 1000000000);
};

const expirateDate = (days) => {
  const date = new Date();
  date.setDate(date.getDate() + days);
  // in milliseconds
  return Math.floor(date.getTime() / 1000);
};

module.exports = {
  generateOrderNumber,
  expirateDate,
};
