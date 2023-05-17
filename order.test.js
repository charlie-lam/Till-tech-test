const Order = require("./order");

describe("Till Order", () => {
  let order
  beforeEach(() => {
    order = new Order()
  })
  it("should be true", () => {
    expect(order).toBeTruthy();
  });
  it('should start with a total of 0', () => {
    expect(order.total).toEqual(0)
  })
  
});
