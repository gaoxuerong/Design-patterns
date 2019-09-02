// 1!=1;4!=3*2*1;n!= n*(n-1)!

let m = function (n) {//计算n的阶乘
  if (n <= 1) {
    return 1;
  } else {
    return n * m(n - 1)
  }
}
let sum = function (n) { //计算 1的阶乘 + 2的阶乘 + ......+n的阶乘
  let result = 0;
  for (let i = 1; i <= n; i++) {
    result = result+m(i)
  }
  return result;
}


// =================  用 缓存 对上边计算进行改进  =================

// 对上边sum的改进
let sum2 = (
  function(){
    let cache = {}
    function m2(n) {//计算n的阶乘
      if (n <= 1) {
        return 1;
      } else {
        return n *  cache(n-1) || m2(n - 1)
      }
    }
    return function (n) {
      let result = 0;
      for (let i = 1; i <= n; i++) {
        let ret = m2(i)
        cache[i] = ret //从1开始，每个阶乘都记录在了缓存中
        result = result+ret
      }
      return result;
    }
  }
)()