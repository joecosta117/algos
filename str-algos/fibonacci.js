function fibonacci(n) {

if(n==1) return 0;
if(n==2) return 1;

var fib1 = 0;
var fib2 = 1;
var fibCurr = 0;

for (var i = 0; i<n; i++) {
  fibCurr = fib1 + fib2;
  fib1 = fib2;
  fib2 = fibCurr;

}

return fibCurr

}



// fibonacci(5);
