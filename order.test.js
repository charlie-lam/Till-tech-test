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
    it('should be able to take an order, add the item to state and add the value to the total', () => {
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
  describe('unit printReceipt method', () => {
    it('should log out the expected result', () => {
      order.total = 9.5
      order.items = {'Cafe Latte': 2}
      order.names = 'Jane'
      const expectedOutput = "The Coffee Connection\n\n123 Lakeside Way\nPhone: 16503600708\n\nTable: 1/[4]\nJane\nCafe Latte     2 x 4.75\n\nTax     $0.82\nTotal     $9.50"
      expect(order.printReceipt()).toEqual(expectedOutput)
    })
  })
  describe('integration test', () => {
    it('should be able to take a name, multiple items and return the right receipt', () => {
      order.addNames('Jane')
      order.addItem('Cafe Latte')
      order.addItem('Blueberry Muffin')
      order.addItem('Choc Mudcake')
      order.addItem('Cafe Latte')
      const expectedOutput = "The Coffee Connection\n\n123 Lakeside Way\nPhone: 16503600708\n\nTable: 1/[4]\nJane\nCafe Latte     2 x 4.75\nBlueberry Muffin     1 x 4.05\nChoc Mudcake     1 x 6.40\n\nTax     $1.72\nTotal     $19.95"
      expect(order.printReceipt()).toEqual(expectedOutput)
    })
  })
});
