import { equalLoanPayment } from "./equalLoanPayment";
import { toFixedSplitedArray, toFloorFixed, toRoundFixed } from "./fixedSplit";
import NP from "number-precision";
NP.enableBoundaryChecking(false); // default param is true

/**
 * @param [fixed=0] @see fixed
 */
export function equalLoanPaymentTable(
  p: number,
  n: number,
  i: number,
  precision: number
) {
  const r = equalLoanPayment(p, n, i);
  const amounts = toFixedSplitedArray(r.total, n, precision);
  let remain = p;
  const loop = amounts.map((e, index, a) => {
    /* per period interests */
    const pi = +toRoundFixed(remain * i, 2);
    /* per period principals */
    const pp = a.length === index + 1 ? remain : +(e - pi).toFixed(precision);
    const am = +toRoundFixed(pi + pp, 2);
    remain = +(remain - pp).toFixed(precision);
    return { am, pp, pi, remain };
  });
  return {
    amounts: loop.map((e) => e.am),
    principals: loop.map((e) => e.pp),
    interests: loop.map((e) => e.pi),
    remainPrincipals: loop.map((e) => e.remain),
  };
}
