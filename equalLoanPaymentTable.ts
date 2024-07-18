import { equalLoanPayment } from "./equalLoanPayment";
import { toFixedSplitedArray, toFloorFixed, toRoundFixed } from "./fixedSplit";
import NP from "number-precision";
NP.enableBoundaryChecking(false); // default param is true

/**
 * @param [fixed=0] @see fixed
 * 等額本息还款計算表格
 * - [招商银行 -- 个人贷款计算器]( https://fin.paas.cmbchina.com/fininfo/calloanper )
 * @deprecated infavor of 
 */
export function equalLoanPaymentTable(
  p: number,
  n: number,
  i: number,
  precision: number
) {
  const r = equalLoanPayment(p, n, i);
  const amounts = toFixedSplitedArray(r.total, n, precision);
  let remainPrincipal = p;
  const loop = amounts.map((e, index, a) => {
    /* per period interests */
    const pi = +toRoundFixed(remainPrincipal * i, 2);
    /* per period principals */
    const pp = a.length === index + 1 ? remainPrincipal : +(e - pi).toFixed(precision);
    const am = +toRoundFixed(pi + pp, 2);
    remainPrincipal = +(remainPrincipal - pp).toFixed(precision);
    return { am, pp, pi, remain: remainPrincipal };
  });
  return {
    amounts: loop.map((e) => e.am),
    principals: loop.map((e) => e.pp),
    interests: loop.map((e) => e.pi),
    remainPrincipals: loop.map((e) => e.remain),
  };
}
