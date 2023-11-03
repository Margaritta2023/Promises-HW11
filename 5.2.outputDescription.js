Promise.resolve()
.then(data => {
throw new Error('Api Error');
return 1;
})
.then(data => console.log('ok'))
.catch(error => {
console.log(error.message);
return "2";
})
.then(data => {
console.log(data);
})
//console:
// Api Error
// 2
//Describtion
// 1.Promise resolves by undefined, (goes to Mictotask queue and comes back to call stack) next => then rejects with an error
// 2. So the code is finding the nearest catch, which (goes to Microtask queue and comes back to call stack) is logging error.message =>'Api Error',
// 3. Catch (goes to Microtask queue and comes back to call stack) is rejecting by 2,
// so the next then(goes to Microtask queue and comes back to call stack) is logging the data of resolved promise with 2.
// All this time event Loop is working watching if call stack is empty then goes to Microtask queue then back, and so till Microtask queue is empty,
// and goes ti Macrotask queue and back to call stack)