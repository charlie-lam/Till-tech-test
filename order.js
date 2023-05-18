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

  printReceipt(){
    let itemList = ''
    Object.keys(this.items).map(key => {
      const stringToAdd = `${key}     ${this.items[key]} x ${data.prices[0][key].toFixed(2)}\n`
      console.log(stringToAdd)
      itemList += stringToAdd
    })
    const result = 
    `${data.shopName}

${data.address}
Phone: ${data.phone}

Table: 1/[4]
${this.names}
${itemList}
Tax     $${(this.total*0.0864).toFixed(2)}
Total     $${this.total.toFixed(2)}`
    return result
  }
}

module.exports = Order;
