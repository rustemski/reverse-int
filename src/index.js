module.exports = function reverse (n) {
    // function reverse (n) {
  var arr = []; 
  if (typeof(n) == 'undefined'|| n == 0) {
    return 0 
  }
  var str = "";
  while (n > 1 || n < -1) {
      if (n > 1) {
          renum = '0' + n%10
          str += Math.floor(renum).toString()
          n = n/10 
        }
    if (n < -1) {
        renum = '0' - n%10 
        str += Math.floor(renum).toString()
        n = n/10 
    }
  }
//   console.log(str)
  return str 
}

// reverse(512)