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
    it('should be able to take an order, track the item/quantity and keep a running total', () => {
      order.addItem('Cafe Latte')
    })
  })
});
