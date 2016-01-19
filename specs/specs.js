describe ("triangleTracker", function() {
  it("is false for sides don't add up to triangle", function() {
    expect(triangleTracker(5, 5, 12)).to.equal(false);
  });

  it("is true for all sides equal", function() {
    expect(triangleTracker(5, 5, 5)).to.equal("equilateral");
  });

  it("is true two sides are equal", function() {
    expect(triangleTracker(5, 5, 8)).to.equal("isosceles");
  });

  it("is true no sides are equal", function() {
    expect(triangleTracker(5, 3, 7)).to.equal("scalene");
  });
});
