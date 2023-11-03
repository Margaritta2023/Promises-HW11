        function mapPromise (prom, callback) {
        return new Promise((resolve, reject) => {
            prom.then(function(result) { 
                try {  
                    let calledRes = callback(result);
                    console.log(calledRes)
                    resolve(calledRes);
                } catch (error) {
                    reject(error);
                 }
            },
            function(error) { 
                reject(error)
            })
        })
        }

        const param1 = Promise.reject("Error")
        const param2 = Promise.resolve(5)
        const param3 = Promise.resolve("par")

        const timesTwo = (val) => val * 2
        console.log(mapPromise (param1, timesTwo))
        console.log(mapPromise (param2, timesTwo))
        console.log(mapPromise (param3, timesTwo))