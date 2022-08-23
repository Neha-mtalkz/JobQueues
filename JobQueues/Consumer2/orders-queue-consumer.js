const { msgModel } = require("./db-connection/connection");
let count = 0;

const ordersProcess = async job => {
  let result = await msgModel.create(job.data);
  count = count + 1;
  console.log(job.data);
  console.log(`${count} records are processed from consumer2!`);
};

module.exports = { ordersProcess };
