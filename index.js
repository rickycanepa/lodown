'use strict';

// YOU KNOW WHAT TO DO //

/**
 * each: Designed to loop over a collection, Array or Object, and applies the 
 * action Function to each value in the collection.
 * 
 * @param {Array or Object} collection: The collection over which to iterate.
 * @param {Function} action: The Function to be applied to each value in the 
 * collection
 * @return {n/a}
 */
 function each(collection, action) {
    if(Array.isArray(collection)) {
        for(var i = 0; i < collection.length; i++) {
            action(collection[i], i, collection);
        }
    } else {
        for (var key in collection) {
            action(collection[key], key, collection);
        }
    }
}
module.exports.each = each;

/**
 * identity: Takes any value and returns the value unchanged.
 * 
 * 
 * @param value: any value
 * 
 * @returns value; any value
 */
 function  identity(value) {
     return value;
 }
 module.exports.each = each;
 
 
 
 /**
  * typeOf: Takes any value and determines its data type. Testing if the
  *         data type is an object is done in the last else if in order to rule out
  *         the othe data of object with the unar4y operator typeof such as Array, Null
  *         and Date.
  * 
  * @param value: any value.
  * 
  * @returns {string}: the name of the data type of the parmeter value or a 
  * messsage taht the data type is unknown.
  * 
  * 
  */
  
  function typeOf(value) {
    // YOUR CODE BELOW HERE //
    if(typeof(value) === "string"){
        return "string";
    } else if(Array.isArray(value)) {
        return "array";
    } else if(typeof(value) === "boolean"){
          return "boolean";
    }  else if(typeof(value) === "undefined"){
        return "undefined";
    } else if(typeof(value) === "function"){
        return "function";
    } else if(value === null) { //-->is this value null?
       return "null"; //--> if true, return "null"
    } else if(typeof(value) === "number"){
      return "number";
    } else if(value instanceof Date) {
        return "date";
    } else if(typeof value === "object") { // --> none of the above but still an object
        return "object";
    } else {
        return "This is not a recognized JS Data Type!";
    }
    // YOUR CODE ABOVE HERE //
} 

module.exports.each = each;

/**
 * first: Designed to return the first number  of elements of an array. It
 *          first checks fto see if there are sensible values for the parameters.
 *          It checks to see if there are sensible values for the parameters. It checks
 *          It checks to see if a given number paramater is not a number or forgotten (undefined)
 *          If given number is negative, an empty array is returned. If the number is larger than
 *          than the length of the array, then it returns the whole array. If all of the 
 *          precedding edge-cases are false, then the fucniton can return the correct nubmer 
 *          of elemtns from the front of the array.
 * 
 * 
 * @param {array} array: Can have any length and any values in its elements.
 * @parma {number} number: The number of elents to be returned
 * 
 * @return {array|value}: Is an empty array if array param is not an array.
 *                      Is the first lement's value if given number is not defined
 *                      or is not a number.
 *                      Is the whole given array if given number is greater than the nubmer of
 *                      elements in the given array.
 *                      Is an empty array if the given number is negative. Iis first number of
 *                      elements of the given arry if all of the preceeding conditionals are false.

 * 
 */
 
 function first(array, number) {
    //I: array array, nubmer number
    //O: if array is not array, return [];
    //     if number is not a nubmer type or is undefined, return first element,
    //      if number requested is greater than number of elements in array, return whole array
    //      if number is negative, return empty string
    //      otherwise, return 1st nubmer of elemetns of array
    
    
    
    
    if (!Array.isArray(array)) {
        return [];
    } else if (typeof number !== "number" || typeof number === "undefined") {
        //if nubmer is empty or NaN or undefined), return 1st elemnt in array
        return array[0];
    } else if (number > array.length) {
        //if number >array length, return whole array
        return array;
    } else if (number < 0) {
        //if number is negative, return empty array
        return [];
    } else {
        //otherwise, return first nubmer of elemtns in array
        return array.slice(0, number);
    }
    
 }
 
 module.exports.each = each;
 
 
 
 
 /**
  * last: Used to return the last nubmer of elemetns of an array. It first checks
  *         to see if there are values for the parmameters. 
  *         it checks to see if a given number parameter is not a number or forgotten
  *         (undefined). If not, the last element of the array is returned. If the given number
  *         is negative, an empty array is returned. If the number is is larger than the length
  *         of the array, then it returns the whole array. If all of the preceeding edge-case
  *         are false, then the function can return the correct number of elements from the end of the
  *         array.
  * 
  * 
  * @param {array} array: Can have any length and any values in its elements.
  * @param {number} number: The number of elements to be returned.
  * 
  * @retrun {array\value}: Is an empty array if array param is not an array.
  *                     Is the last elemetns value if given number is not defined
  *                     or not a number. Is the whole given array if given number is
  *                     greater tha nthe number of elemetns in the gvein array.
  *                     Is an empty array if the given number is negative.
  *                     Is the last number elements of the given array if all
  *                     of the preceeding condtionals fare false.
  *
  * 
  */
  
  function last(array, number) {
      //I: array arry, number
      //O: if array is not array, return [];
      //C:
      //E:
      if (!Array.isArray(array)) {
            return [];
        } else if (typeof number !== "number" || typeof number === "undefined") {
            //if nubmer is empty or NaN or undefined), return 1st elemnt in array
            return array[array.length -1];
        } else if (number > array.length) {
            //if number > array length, return whole array
            return array;
        } else if (number < 0) {
            //if number is negative, return empty array
            return [];
        } else {
            //otherwise, return first nubmer of elemtns in array
            return array.slice(-number);
        }
        
     }
 
  
  module.exports.each = each;
  
  
  /** 
   * indexOf: Returns the index of the first occurace of a given value in a given array. 
   *            If the value is not. If the value is not in the array, -1 number is returned.
   * 
   * @param {array} array; can be of any length and contain any values.
   * @param{value} value: can be of any type.
   * 
   * @eturns{number} index: the index of the array that conatins the same value as the given value
   * 
   * @returns {number} -1: if given number is a negative number
   * 
   */ 
   function indexOf(array, value){
    //I: array array, value value
    //O: return inded of 1st element taht === value
    //      return -1 if value is not in array
    //C: do not use .indexOf method
    //E: multiple occurances of val && val isnt an array
    for (var i = 0; i <= array.length - 1; i++) {
        if (array[i] === value) {
            return i;
        }
    }
    

//return -1 if the value is not in the array
if (!array.includes(value)) {
    return -1;
    }
}

module.exports.each = each;

/**
 * contains: Returns a true or false boolean indicating whether a given value
 *            array, then it is false.
 * 
 * @param {array} array: can be any length and contain any values
 * @param {value} value: can be any value
 * 
 * @returns {string}: Warning that a value was not given to the parameter value.
 * @returns {boolean}: If value is in array, it is true. If value is not in
 *                    array, then it is false.
 *
 */ 
 
 
 function contains(array,value) {
 //I: array, value
   //O: return true if array contains value
   //       return false otherwise
   //C: use ternary operators for control flow
   //E: ? is ternary
   //       value could be undefined
   
   
   //check if value is undefined
   if (typeof value === "undefined") {
       return "There is no value";
   } else {
       //using ?, return true or false if value is in array
       return array.includes(value) ? true : false;
   }
}

module.exports.each = each;


/**
 * unique: Returns an array containing only the unique values from a given array. Unique slects
 *         the first instance of a value from the array and pushes the value to a new array.
 * 
 * @param {array} array: an array of any length and contating any values.
 * 
 * @returns {array}: an array containging only the uniqe values from param array.
 */ 
 
 function unique(array) {
    //I: Array
    //O: Return new array of all elements from <array> w/ duplicates removed
    //C: Use _.indexOf() from above

    //create a new array to enter non duplicates
    var returnArr = [];
    //loop through given array to check each element for uniquness
    for(var i = 0; i < array.length; i++) {
        if(indexOf(returnArr, array[i]) === -1) {
            returnArr.push(array[indexOf(array, array[i])]);
        }
    }
    return returnArr;
}
module.exports.each = each;

/**
 * filter: Iterates through a array passing each element into function, and returns a new array
 * containing only elements that returned true.
 * 
 * @param {array} array: an array of any length and vlaue
 * @param {function} func: will take args (element, index, collection) and returns
 *                          a boolean fro each elemtn of the collection.
 * 
 * returns {array}: an array of values from another array that when a funciton is run
 *                   using the vlaue, the function returns true.
 * 
 */
 
 function filter(array, func) {
   //I: array array, func function
   //O: return new aray of elements of elements that return true
   //C: use function passed into _.filter
   //E: func returns not boolean
   
   //create new array to store the filtered elements
   var filteredElements = [];
   //loop through array to access each element
   for(var i = 0; i < array.length; i++) {
       //use func on each element
       //if func returns true, push elment to new array
       if(func(array[i], i, array) === true) {
           //must === true to cover edge-case that func does not return boolean t or f
            filteredElements.push(array[i]);
           
       }
       
   }
   // return new array of filtered elemtns
   return filteredElements;
} 
module.exports.each = each;




/**
 * reject: iterates through an array passing each element into a function, and returns a new array of
 * all elements that returned falsey.
 * 
 * 
 * @param [array} array: an array of any length and value.
 * @param {function} func: will take args(elemnt, index, collection) and returns boolean for
 *                  each element of the collection.
 * 
 * @returns {array}: an new array containing all falsey elements from the passed in array
 *                  
 *
 */ 
 
 function reject(array, func) {
    //I: array array, func function
    //O: return new array of elements for which func returns false
    //C: use function passed into
    var myElements = [];
    for (var i = 0; i <= array.length - 1; i++) {
        //use func on each element
        //if true, we need to push the element to the new array
        if(func(array[i],i,array) === false) {
            //must === true to cover eedge-case taht func does not return boolean
        myElements.push(array[i]);
        }
    }
    //return new array of filtered elements
    return myElements;
}
module.exports.each = each;


/**
 * partition: Separate values from one array into two arrays, and return a single
 *              array with two elemetns that each contains one of the arrays of 
 *              separated values.
 * 
 * @param {array} array: an array of any length or value
 * @param {function} func: will take args (element, index, collection) and returns boolean
 *                          for each elementn of the collection.
 * 
 * @returns {array}: an array of two sub arrays, one sub array containing truthy values, the other
 * containing falsey values.
 *                      
 */ 
 
 function partition(array, func) {
        //create one array to hold and return values that func gives as truthy,
        //and for values taht func gives as falsy
        var truArr = [];
        var falArr = [];
        var myArr = [];
        for (var i = 0; i < array.length; i++){
           if(func(array[i], i, array)) {
               //if truthy, push current value to truArr
               truArr.push(array[i]);
           } else {
               //must be falsy, so push value to falArr
               falArr.push(array[i]);
           }
        }
        //after looping through func, return nw arrays as one array
        myArr.push(truArr, falArr);
        return myArr;
        
    }
    module.exports.each = each;
    
    
    
    /**
     * map: Returns a new array of modified values. These values are the result
     *              of running a function on the value on each index or key
     *              of a given collection and pushing this new value to a new array
     * 
     * @param {array|object} collection: collection of any length or values
     * @param {function} func: will take args (element, index, collection) and returns boolean
     *                          for each elementn of the collection.
     * 
     * @returns: {array}: an array that contains the new values created by func param.
     * 
     * 
     */ 
     
     
     function map(collection, func) {
        //.map function will return a new collection that will be modified by the func param
        
        //create new array to return new values modified by func
        var arrValues = [];
        
        //check if colleciton is an array
        if (Array.isArray(collection)) {
            //loop throug harray to access each element
            for(var i = 0; i < collection.length; i++) {
                //apply func to each element, and push into the new array
                arrValues.push(func(collection[i], i, collection));
            }
        //retrun new array
        return arrValues;
    } else {
        //must be object, so loop through it
        for(var key in collection) {
            //now we push func to the value and new array
            arrValues.push(func(collection[key], key, collection))
        }
        return arrValues;
        }
    }
    module.exports.each = each;
    
    
/**
 * pluck: Returns all of the values of a given key from all of the objects in a
 *          list/array.  Uses the map() function to return a list of these 
 *          values of the given key.  Note: the map function uses a declared
 *          function that returns the value of the desired key
 * @param {array} array: an array which its elements contain objects
 * @param {string} key: the given property of an object to which its value
 *                          is desired to be returned.
 * 
 * @param {object} arrayElement: the collection[i] argument of the func 
 *                      function in map(). This is the indexed object that
 *                      map() is iterating and applying the getKeyValue() to 
 *                      get the value of the object's key. 
 * 
 * @returns {array}: returns an array of each value from an array of objects at the input property
 *                  
 */
 
  function pluck(array, key){
    //I: array of objects, key property
    //O: return an array of values that are paired to key param
    //C: must use _.map()
    
    //map() will take collection and func and return the array modified by func
    //The modefication will return value of key and func in map takes args (collection[i], i, collection)
    function getKeyValue(arrayElement) {
        return arrayElement[key];
    }
    // return an array of values that are paired to key param using _.map()
    return map(array, getKeyValue);
    
    
    }
    module.exports.each = each;
    
    
    
    
/**
 * every: Returns boolean true if a given function returns true for all 
 *          elements of a given array.  If the given function returns false for
 *          any of the elements, this every() function returns a boolean false.
 *          
 *          The every() function uses the map() function to apply a given 
 *          function to produce true or false values for each element of a 
 *          given collection.  These values are then pushed to a new array, 
 *          which a final for-loop checks to see if all elements returned by 
 *          map() are true.
 * 
 *          Note: a function testTruthy is defined to be used by the map() 
 *          function if a function is not given.  This function simply returns 
 *          the truthy values for each elements value.
 * 
 * @param {array|object} collection: either an array or object of any length
 *          and any value
 * @param {function} func: a function that takes the value of an element of a
 *          given collection and returns a boolean
 * 
 * @returns {boolean}: returns true if func returns true for all elements, 
 *          and returns false if func returns any false
 */

function every(collection, func) {
    //I: collection arraay, func function
    //O: {boolean}
    //C:
    //E:if not boolean return true for thruthy value, or false for falsy/
    //func may not be a function
    
    if(func === undefined) {
        //iterate through collection and test the element
        for (var i = 0; i < collection.length; i++) {
            //test elemtn to be false
            if(collection[i] === false) {
                //if element is false then return false
                return false;
            }
        }
        //else return true
        return true;
    }
    //check if collection is an array
    if (Array.isArray(collection)) {
        for (var i = 0; i < collection.length; i++) {
            //check if func returns boolean
            if (!func(collection[i], i, collection)) {
                return false;
            }
        }
        return true;
    }
    //check if current value, current key, <collection> is equal to the object
    else if (typeof collection === 'object') {
        for (var key in collection) {
            //check if returns value to the object
            if (!func(collection[key], key, collection)) {
                return false;
            }
        }
        //elese true;
        return true;
    }
  }
  module.exports.each = each;
  
 /**
 * some: used to find whether any value in the given list matches the given 
 *        condition or not. If at least one value satisfies this condition then
 *        the output will be true. When none of the values matches then the output
 *        will be false. 
 * 
 * @param {array|object} collection: either an array or object of any length
 *          and any value
 * 
 * @param {function} func: a function that takes the value of an element of a
 *          given collection and returns a boolean
 * 
 * 
 * @returns {boolean}: returns true if func returns true for any element, 
 *          and returns false only if func returns false for all elements
 */
 
 function some(collection, func) {
        //account for func being undefined
        //if undefined, return true id every elemnt is true -- false is falsy
        if(func === undefined) {
            //iterate through collection and test the lement
            for (var i = 0; i < collection.length; i++) {
                //test elemnt to false
                if (collection[i] === true) {
                    //if element is false then return false
                    return true;
                }
            }
            //else true
            return false;
        }
        if (Array.isArray(collection)) {
            for (var i = 0; i < collection.length; i++) {
                if(func(collection[i], i, collection)) {
                    return true;
                }
            }
            //else false
            return false;
        }
        //check to see if collection is equal to the object and loop through keys
        else if(typeof collection === 'object') {
            for (var key in collection) {
                if (func(collection[key], key, collection)) {
                    return true;
                }
            }
            return false;
            
        }
    }
    module.exports.each = each;
    
    
    
 /** reduce: Uses a function to create a new value given two values, a starting 
 *          value and a value from an element from a given array. By 
 *          entering the starting value and the value from the array into
 *          the function, a new value is produced.  This new value is used as 
 *          the starting value of the next iteration through the array.  
 *          If no starting value is given, then the first element of the 
 *          array is the starting value, and the second element will be
 *          the second value given to the funtion.  The returned value of
 *          reduce() is the final value returned by the given function after
 *          iterating through the entire array. 
 * 
 * @param {array} array: must be an array with values that the given function
 *          can handle properly.
 * @param {function} func: a function that returns a new value given a starting
 *          value and a value from the given array.
 * @param {value} seed: the given starting value
 * 
 * @returns {value}: the final value returned by the given function after
 *          iterating through the entire given array.
 */

function reduce(array, func, seed) {
        //check if seed exist
        if (seed !== undefined) {
            //if it does exits, loop through the array
            for (var i = 0; i < array.length; i++) {
                //reassign seed to be the value of the functiojn call
                //call the func on seed, value, and index
                seed = func(seed, array[i], i);
        }
        return seed;
        
        } else {
            //if no seed is given, set seed to equal the first value of the array
            seed = array[0];
            //if it does, then loop through array
            for (var i = 1; i < array.length; i++) {
                seed = func(seed, array[i], i);
            }
        }
        return seed;
        } 
module.exports.each = each;



 /**
  
 * extend:  Makes a new object that contains all of the key/value pairs from
 *          any given number of objects.  It adds/orders these values from 
 *          each subsequent object in order.
 * 
 * @param {object} ...args: is an argument object combined with a spread 
 *          operator representing any given number of objects.
 * 
 * @returns {object}: a new object that contains all the key/value pairs of all
 *          objects given as parameters in order of how the parameters were
 *          assigned their object values.

 */
 
function extend(obj1, ...obj2) {
            var newObj = Object.assign(obj1, ...obj2);
            return newObj;
        }
        
module.exports.each = each;
