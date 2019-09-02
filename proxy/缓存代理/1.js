// 1!=1;4!=3*2*1;n!= n*(n-1)!
let m = function (n) {
  if (n <= 1) {
    return 1;
  } else {
    return n * m(n - 1)
  }
}
let sum = function (n) {
  let result = 0;
  for (let i = 1; i <= n; i++) {
    result = result+m(i)
  }
  return result;
}