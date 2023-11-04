let a = 5;
setTimeout(() => {
console.log(a);
a = 10;
}, 0);
let p = new Promise((resolve, reject) => {
console.log(a);
a = 25;
resolve();
});
p.then(res => {
console.log('final result ', res)
});
console.log(a);

// 5
// 25
// final result undefined
// undefined 
// 25
// Describtion
// 1. a = 5, setTimeOute is going to call stack, then immediately to Macrotask 
// 2. new promise resolved after logging 5, and making the value of a = 25
// 3. then the next sinchrone code is being done, the last console, which is logging 25(before it then goes to MicroSQ)
// 4. then is going to call stack because it is already free, and logging "final result", and undefined(by which p was resoved)
// 5. now  when and stack and MicroSQ are empty, event loop takes (referet=nce of) settimeout to stack and executes by logging 25.
// All this time event Loop is working watching if call stack is empty then goes
// to Microtask queue then back, and so till Microtask queue is empty, and goes to Macrotask queue and back to call stack.
