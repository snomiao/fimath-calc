import { range, sum, tsvParse } from "d3";
import { tsvHeader } from "./tsvHeader";
import { equalLoanPaymentTable } from "./equalLoanPaymentTable";

// await Promise.all(
//   range(10000).map(async (nnn) => {
//     it("works 18 "+nnn, async () => {
//       const r = equalLoanPaymentTable(
//         554.26,
//         18,
//         (9.1000 + 0.001 * nnn) / 100 / 12,
//         -Math.log10(0.01)
//       );
//       // console.log(r);
//       expect(r.remainPrincipals.toReversed()[0]).toEqual(0);
//       expect(r.amounts[0]).toEqual(33.06);
//       expect(r.amounts.toReversed()[0]).toEqual(33.14);
//       expect(r.interests[0]).toEqual(4.21);
//       expect(r.interests.toReversed()[0]).toEqual(0.26);
//     });
//   })
// );

it("works", async () => {
  // 还款方式	等额本息还款	还款总额	1001.05	利息总额	72.27
  const header = tsvHeader("期数	月供	月供本金	月供利息	本金余额");
  const example = [
    `
期数	月供	月供本金	月供利息	本金余额
1	41.71	36.06	5.65	892.72
2	41.71	36.28	5.43	856.44
3	41.71	36.50	5.21	819.94
4	41.71	36.72	4.99	783.22
5	41.71	36.95	4.76	746.27
6	41.71	37.17	4.54	709.10
7	41.71	37.40	4.31	671.70
8	41.71	37.62	4.09	634.08
9	41.71	37.85	3.86	596.23
10	41.71	38.08	3.63	558.15
11	41.71	38.31	3.40	519.84
12	41.71	38.55	3.16	481.29
13	41.71	38.78	2.93	442.51
14	41.71	39.02	2.69	403.49
15	41.71	39.26	2.45	364.23
16	41.71	39.49	2.22	324.74
17	41.71	39.73	1.98	285.01
18	41.71	39.98	1.73	245.03
19	41.71	40.22	1.49	204.81
20	41.71	40.46	1.25	164.35
21	41.71	40.71	1.00	123.64
22	41.71	40.96	0.75	82.68
23	41.71	41.21	0.50	41.47
24	41.72	41.47	0.25	0.00
`.trim(),
  ].map((e) => tsvParse<(typeof header)[number]>(e))[0];
  // Total	1001.05	928.78	72.27	---
  const principal = 928.78;
  const r = equalLoanPaymentTable(principal, 24, 7.3 / 100 / 12, 2);
  expect(r.amounts).toEqual(example.map((e) => +e.月供));
  expect(r.principals).toEqual(example.map((e) => +e.月供本金));
  expect(r.interests).toEqual(example.map((e) => +e.月供利息));
  expect(
    r.principals.map(
      (x, i, a) => 0 + +(principal - sum(a.slice(0, i)) - x).toFixed(2)
    )
  ).toEqual(example.map((e) => +e.本金余额));
  expect(r.remainPrincipals).toEqual(example.map((e) => +e.本金余额));
});
