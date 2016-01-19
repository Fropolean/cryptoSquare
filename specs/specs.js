describe ('square', function() {
  it("determines if string length is a square number", function() {
    expect(square(5)).to.equal(false);
  });
  it("determines if string length is a square number", function() {
    expect(square(4)).to.equal(true);
  });
});
