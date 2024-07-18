import IRR from "./IRR";
it("works", async () => {
  expect(
    (
      IRR([-35000, 5976.9, 5976.9, 5976.9, 5976.9, 5976.9, 5976.95]) *
      12 *
      100
    ).toFixed(2)
  ).toEqual("8.39");
});
