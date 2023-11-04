Promise.resolve()
.then(() => console.log(1)) 
.catch(() => console.log(3))
.then(() => { console.log(2); throw new Error(); })
.then(() => console.log(4))
.then(() => console.log(4))
Promise.resolve()
.then(() => console.log(11))
.then(() => { console.log(12); throw new Error(); })
.catch(() => console.log(13))
.catch(() => console.log(14))
.then(() => console.log(15))

1
11
12
2
13
15

// 1.First promise resolvse with undefined, then(log1) goes to microstack queueMicrotask MediaQueryListEvent, and first promise has to
// wait until it works out. The code is going on to second promise, it`s then goes to microstack queu too
// 2. Call stack is empty, so first promise`s then resolves with 1, logs 1. There is no error, so it jumps above cathc, and the next then goes to MicroSQ queue
// 3. At that while the previous element (LIFO) of MicroSQ goes to stacj and logs 11, and the next then goes to MicroSQ.
// 4. Call stack is empty, so the 1st element of queu logs 2, and because there is no longer cathc to handle error, first promise is over, and the n the 
// left part of second promise will work. logs 12, then cathc logs 13, there is no eroor so we go to then and log 14
// All this time event Loop is working watching if call stack is empty then goes to Microtask queue then back, and so till Microtask queue is empty,
// and goes ti Macrotask queue and back to call stack.
