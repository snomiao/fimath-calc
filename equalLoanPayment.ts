// references:
// - [等额本息_百度百科]( https://baike.baidu.com/item/%E7%AD%89%E9%A2%9D%E6%9C%AC%E6%81%AF/3227456 )

/**
- 本金: Principal
- 期数: Number of periods or term length
- 每期利率: Interest rate per period or periodic interest rate
//
// 每月利率 = 年利率/12
// 每日利率 = 年利率/360 或 年利率/365
//
- 期数: Number of Installments
- 月供: Monthly Installment
- 月供总额: Total Monthly Installment Amount
- 月供本金: Monthly Principal Payment
- 月供利息: Monthly Interest Payment
- 本金余额: Principal Balance
*/
export function equalLoanPayment(p: number, n: number, i: number) {
  const k = (p * i * (1 + i) ** n) / ((1 + i) ** n - 1);
  const ti = n * k - p;
  const t = ti + p;

  return {
    total: t,
    totalPrincipal: p,
    totalInterest: ti,
    periodic: k,
    // periodicPrincipal: p / n,
    // periodicInterest: ti / n,
  };
}
