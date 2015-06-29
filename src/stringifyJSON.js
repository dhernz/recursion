// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

// recursive reimplementation of JSON.stringify
var stringifyJSON = function(obj) {
 
  // null
  if (obj === null) {

    return "null";
  
  }
 

  if (obj === undefined ){ //check in if de object is defined

    return undefined;
  }


  if(obj.constructor === Function) { 

  	return  undefined;
  }
 
  // strings
  if (obj.constructor === String) {
    return '"' + obj + '"';
  }
 
  
  if (obj.constructor === Array) {
    if (obj.length) {
      var partialJSON = [];

      for (var i = 0; i < obj.length; i++) {
        partialJSON.push(stringifyJSON(obj[i])); // recursion
      }

      return '[' + partialJSON.join(",") + ']';
    } 
    else {
      return '[]';
    }
  }
 
    // objects
  if (obj.constructor === Object) {
    var keys = Object.keys(obj); // converting an array of the keys the object ex:  [1,2,3]
    if (keys.length) {
      var partialJSON = '';
  
      for (var i = 0; i < keys.length; i++) {
        var key = keys[i];
  
        if (!key || obj[key] === undefined || typeof key === 'function' || typeof obj[key] === 'function') {
  
        } else {
          if (i === keys.length - 1) {
            partialJSON += stringifyJSON(key) + ':' + stringifyJSON(obj[key]); // recursion
          } else {
            partialJSON += stringifyJSON(key) + ':' + stringifyJSON(obj[key]) + ','; // recursion
          }
        }
      }
      return '{' + partialJSON + '}';
    } else {
      return '{}';
    }
  }
 
  // everything else (numbers, booleans, etc.)
  return obj.toString();
 
};


