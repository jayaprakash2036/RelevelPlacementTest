const getDoubleOfNumber = function(number) {
    console.log('inside function')
    return 2*number
}

const memoize = (n) => {
    const cachemap = new Map()
    
    return function(n){
        if(cachemap.has(n))
        {
         return cachemap.get(n)
        
        }
        else
        {
         const result = getDoubleOfNumber(n)
         cachemap.set(n, result)
        return result
         }
        }
}

const memoizedGetDoubleOfNumber = memoize(getDoubleOfNumber)
