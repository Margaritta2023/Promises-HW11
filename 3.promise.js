function promisifyParam(param) {  
    return new Promise ((resolve, reject) => {
        setTimeout(() =>{
            if(typeof param === "string") resolve(param.toUpperCase());
            else reject(param)
        },500)
    }).catch(() => console.log("Please enter a string"))
}


console.log(promisifyParam("param"))
console.log(promisifyParam(125))
