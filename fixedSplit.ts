/**
 * input: 1001.05, 24, 2
 * output: [41.71].repeat(23) + 41.72
 * precision: minimum cash unit
 * Like: 1 JPY, 0.01 CNY, 0.001 USD
 * so the precisions is JPY=0, CNY=2, USD=3
 */
export function toFixedSplitedArray(total: number, n: number, precision = 0) {
  const per = toRoundFixed(total / n, precision);
  const flush = +(total - per * (n - 1)).toFixed(precision);
  return Array(n - 1)
    .fill(per)
    .concat([flush]);
}
export function toFloorFixed(float: number, precision: number) {
  return +(Math.floor(float * 10 ** precision) / 10 ** precision).toFixed(
    precision
  );
}
export function toRoundFixed(float: number, precision: number) {
  return +(Math.round(float * 10 ** precision) / 10 ** precision).toFixed(
    precision
  );
}
