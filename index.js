fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(obj, fn) {
      for(let i in obj){
        // debugger;
        fn(obj[i]);
      };
      return obj;
    },

    map: function(obj, fn) {
      let result = [];
      for(let i in obj){
        // debugger;
        result.push(fn(obj[i]));
      };
      return result;

    },

    reduce: function(obj, fn, acc) {
      let result = 0;
      if (typeof(acc) === "number"){
        result = acc;
      }
      for(let i in obj){
        // debugger;
        result = fn(result,obj[i], obj);
      };
      return result;
    },

    find: function (obj, fn) {
      let result = [];
      for(let i in obj){
        if(fn(obj[i])){
          result.push(obj[i]);
          break;
        }
      };
      return result[0];
    },

    filter: function (obj, fn) {
      let result = [];
      for(let i in obj){
        if(fn(obj[i])){
          result.push(obj[i]);
        }
      };
      return result;
    },

    size: function (obj) {
      let counter = 0;
      for(let i in obj){
        counter++;
      };
      return counter;
    },
    first: function (obj, n) {
      if (typeof(n) === "number"){
        return obj.slice(0, n);
      }
      return obj[0];
    },
    last: function (obj,n) {
      // debugger;
      if (typeof(n) === "number"){
        n= 0-n;
        return obj.slice(n);
      }
      return obj.slice(-1)[0];
    },

    keys: function (obj ) {
      let result = [];
      for(let i in obj){
        result.push(i);
      };
      return result;
    },

    values: function (obj) {
      let result = [];

      for(let i in obj){
        result.push(obj[i]);
      };
      return result;
    },

    compact: function (obj) {
      let result = [];

      for(let i in obj){
        if (obj[i]) {result.push(obj[i]);}
      };
      return result;
    },

    sortBy: function (obj, fn) {
      const sorter = function (n1, n2) {
        return fn(n1) - fn(n2);
      };
      let result = [];
      result =  obj.slice().sort(sorter);
      return result;
    },

    flatten: function (target, once) {
      let result = [];
      const deepIterator = function (target) {
        if (typeof target === 'object') {
          for (const key in target) {
            deepIterator(target[key]);
          }
        } else {
          result.push(target);
        }
        return result;
      }

      const shallowIterator =  function(target) {
        for (const key in target) {
          if (typeof target[key] === 'object') {
            for (const nestedKey in target[key]) {
              result.push(target[key][nestedKey]);
            }
          } else {
            result.push(target[key]);
          }
        }
        return result;
      }
      if(once){
        return shallowIterator(target);
      }else{
        return deepIterator(target);
      }
    },



    uniq: function (obj) {
      let result = [];

      for(let i in obj){
        if (!result.includes(obj[i])) {result.push(obj[i]);}
      };
      debugger;
      return result;


    },

    functions: function() {

    },


  }
})()

fi.libraryMethod()
