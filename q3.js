//660612151
//นายปัชนภ รอดกลึง
function primeNumber(a) {
    /* Your code here */
    var d = 2;
    while (d != a) {
        if (d == 1) {
            return "NO";
        }
        if (a % d == 0) {
            return "NO";
        }
        d++;
    }
    return "YES";
}
var d1 = 10;
var d2 = 29;
var d3 = 2;
console.log(primeNumber(d1));
console.log(primeNumber(d2));
console.log(primeNumber(d3));
module.exports = primeNumber;
