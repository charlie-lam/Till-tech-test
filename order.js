const data = require("./price_list.json");

console.log(data[0]);
class Order {
  constructor() {
    this.total = 0;
    this.names = "";
  }

  addNames(names) {
    this.names += names;
  }
}

module.exports = Order;
