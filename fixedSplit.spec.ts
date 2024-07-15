import { toFixedSplitedArray } from "./fixedSplit";

it("works", async () => {
  expect(toFixedSplitedArray(1001.05, 24, 2)).toEqual([
    ...[41.71, 41.71, 41.71, 41.71, 41.71, 41.71, 41.71, 41.71],
    ...[41.71, 41.71, 41.71, 41.71, 41.71, 41.71, 41.71, 41.71],
    ...[41.71, 41.71, 41.71, 41.71, 41.71, 41.71, 41.71, 41.72],
  ]);
});

// it("works", async () => {
//   expect(toFixedSplitedArray(554.26, 18, 2)).toEqual([
//     [
//       33.06, 33.06, 33.06, 33.06, 33.06, 33.06, 33.06, 33.06, 33.06, 33.06,
//       33.06, 33.06, 33.06, 33.06, 33.06, 33.06, 33.06, 33.16,
//     ],
//   ]);
// });
