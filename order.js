const data = require("./price_list.json")[0];

class Order {
  constructor() {
    this.total = 0;
    this.names = "";
    this.items = {}
  }

  addNames(names) {
    this.names += names;
  }

  addItem(item) {
    const foundPrice = data.prices[0][item]
    if(foundPrice){
      this.items[item] ? this.items[item] ++ : this.items[item] = 1
      this.total += foundPrice
    }
    else{
      throw new Error('Item not in list')
    }
  }
}

module.exports = Order;
