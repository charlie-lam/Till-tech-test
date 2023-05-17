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
    console.log(data.prices[0])
    const found = data.prices[0][item]
    console.log(found)
    if(found){
      this.items[item] ? this.items[item] += 1 : this.items[item] = 1
      this.total += found
    }
    else{
      throw new Error('Item not in list')
    }
  }
}

module.exports = Order;
