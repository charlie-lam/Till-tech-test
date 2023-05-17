const Order = require("./order");

describe("Till Order", () => {
  let order
  beforeEach(() => {
    order = new Order()
  })
  it("should exist", () => {
    expect(order).toBeTruthy();
  });
  it('should start with a total of 0', () => {
    expect(order.total).toEqual(0)
  })
  describe('unit addNames method', () => {
    it('should store the name, in state, passed to it', () => {
      order.addNames('Jane')
      expect(order.names).toEqual('Jane')
    })
  })
  describe('unit addItem method', () => {
    it('should be able to take an order, track the item and add the value to the total', () => {
      order.addItem('Cafe Latte')
      expect(order.items).toEqual({'Cafe Latte': 1})
      expect(order.total).toEqual(4.75)
    })
    it('should throw an error if for some reason an item not at the shop is added', () => {
      expect(() => {
        order.addItem('Smoked salmon')
      }).toThrow('Item not in list')
    })
    it('should be able to track two added items and the running total', () => {
      order.addItem('Cafe Latte')
      order.addItem('Cafe Latte')
      expect(order.items).toEqual({'Cafe Latte': 2})
      expect(order.total).toEqual(9.5)
    })
  })
});
