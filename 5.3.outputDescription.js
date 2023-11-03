console.log(1)
setTimeout(() => {
console.log(2)
}, 20)
Promise.resolve()
.then(() => {
console.log(3)
return 1
})
.catch(e => console.log(e, 4))
.finally(res => console.log(res, 5))
.then((res) => console.log(res))
console.log(6)

//console:
// 1
// 6
// 3
// undefined 5
// 1
//undefined
// 2
// Describtion
// 1.At first the sinchrone code will be done in written order, so we will have 1 and 6.
// 2.Then setTimeout is going to Macrostack queue and waiting till Microstack queue is empty. 
// 3.Then we go to Promise,which resolved with undefined, 1st then is going to microstack and coming back to call stack,
// because call stack is free,( first event loop is taking code from microstack), so it went to call stack, executed by logging 3
// 4.We have no Error at this time, so we are going to finally, which logs res which is undefined and 5
// 5.Then the next then is logged by the order I described earlier, so we log undefined
// 6.Then at the end where and call stack and microtask queue are empty, the code, which is in Macrotask is getting to the call stack and logging 2. 
// All this time event Loop is working watching if call stack is empty then goes to Microtask queue then back, and so till Microtask queue is empty, 
// and goes ti Macrotask queue and back to call stack)