class Order {
  constructor(){
    this.total = 0
    this.names = ''
  }

  addNames(names){
    this.names += names
  }
}

module.exports = Order;