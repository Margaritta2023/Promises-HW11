function squarePromise (prom) {
    return new Promise((resolve, reject) => {
      prom.then((res) => {
        if(!isNaN(res)){
           const parsedRes = parseInt(res)
           resolve(parsedRes * parsedRes)
          } else
           reject(`Cannot convert ${prom} to a number!`)
      }).catch(res => reject(res))}
        )}  
             

let prom = new Promise ((resolve, reject) => resolve(120))
console.log(squarePromise (prom))

let prom1 = new Promise ((resolve, reject) => resolve("15"))
console.log(squarePromise (prom1))

let prom3 = new Promise ((resolve, reject) => reject("ak"))
console.log(squarePromise (prom3))

