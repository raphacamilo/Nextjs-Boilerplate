function sillyFunction() {
  return 5;
}

describe("silly function", () => {
  test("sum", () => {
    expect(sillyFunction()).toBe(5);
  });
});
