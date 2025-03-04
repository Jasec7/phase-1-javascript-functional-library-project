function myEach(collection, foo){
    let values = Array.isArray(collection) ? collection : Object.values(collection);
    for (let value of values) {
        foo(value);
    }
    return collection;
};

function myMap(collection, foo){
    const newArray = []
    let values = Array.isArray(collection) ? collection : Object.values(collection);
    for (let value of values) {
        newArray.push(foo(value))
    }
    return newArray;
};

function myReduce(collection, foo, acc){
    let values = Array.isArray(collection) ? collection : Object.values(collection);
    if (acc === undefined) {
        acc = values[0];
        values = values.slice(1); // Start looping from the second element
    }
// Iterate and apply the callback function
    for (let value of values) {
        acc = foo(acc, value, collection);
    }

    // Return the final accumulated value
    return acc;
};

function myFind(collection, foo){
    let values = Array.isArray(collection) ? collection : Object.values(collection);
        // Iterate and check each value
        for (let value of values) {
            if (foo(value)) {
                return value; // Stop and return the first match
            }
        }
    // If no match was found, return undefined
        return undefined;
    };

function myFilter(collection, predicate){
        let result = [];

        let values = Array.isArray(collection) ? collection : Object.values(collection);
        for (let i = 0; i < values.length; i++) {
            if (predicate(values[i])) {
              result.push(values[i]);
            }
          }
        
          return result;
        };

function mySize(collection){
    let values = Array.isArray(collection) ? collection : Object.values(collection);

     return values.length   
};

function myFirst(array, n){
    if (n !== undefined) {
        return array.slice(0, n);
    }
    return array[0];
}

function myLast(array, n){
    if (n !== undefined) {
        return array.slice(-n);
    }
    return array[ array.length - 1];
};

function myKeys(object){
    return Object.keys(object)
};

function myValues(object){
    return Object.values(object)
};
