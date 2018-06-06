fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(collection, alert) {
      if (Array.isArray(collection)) {
        for (let i = 0; i < collection.length ; i++) {
          alert(collection[i])
        }
        return collection
      } else {
        for (let key in collection) {
          alert(collection[key])
        }
        return collection
      }
    },

    map: function(collection, func) {
      if (Array.isArray(collection)) {
        newArray = []
        for(const el of collection) {
          newArray.push(func(el))
        }
        return newArray
      } else {
        newObj = []
        for(const key in collection) {
          newObj.push(func(collection[key]))
        }
        return newObj
      }
    },

    reduce: function(collection, func, accumulator) {
      for(const element of collection) {
        accumulator += func(0, element, collection)
      }
      return accumulator
    },

    find: function(collection, predicate) {
      for(const element of collection) {
        if (predicate(element)) {
          return element
        }
      }
    },

    filter: function(collection, predicate) {
      newArray = []
      for(const element of collection) {
        if (predicate(element)) {
          newArray.push(element)
        }
      }
      return newArray
    },

    size: function(collection) {
      newArray = Object.keys(collection)
      return newArray.length
    },

    first: function(array, num) {
      if (num === undefined) {
        return array[0]
      } else {
        return array.slice(0, num)
      }
    },

    last: function(array, num) {
      if (num === undefined) {
        return array.slice(-1)[0]
      } else {
        return array.slice(array.length-num)
      }
    },

    compact: function(array) {
      newArray = []
      for(const element of array) {
        if (element) {
          newArray.push(element)
        }
      }
      return newArray
    },

    sortBy: function(array, iteratee) {
      newArray = []
        for(const element of array) {
          newArray.push(iteratee(element))
        }
        return newArray.sort(function(a,b) {
          return a-b})

    },
    flatten: function(array) {

   },

   uniq: function(array, isSorted, func) {
     // func = (val => val % 3)

     newArray = []
     remainders = []
     if (func) {
       for (const element of array) {
         if (!remainders.includes(func(element))) {
           newArray.push(element)
           remainders.push(func(element))
         }
       }
     } else {
       for (const element of array) {
         if (!newArray.includes(element)) {
           newArray.push(element)
         }
       }
     }
     return newArray
   },

   flatten: function(array, shallow) {
     let newArray = []

     function flat(array) {
       for(const el of array) {
         if (typeof el === "number") {
           newArray.push(el)
         } else {
           flat(el)
         }
       }
     }

     function flatWithShallow(array) {
       i = 0
       for(const el of array) {
         if (typeof el === "number") {
           newArray.push(el)
         } else {
           if (i < 1) {
             i++
             flat(el)
           } else {
             for(const x of el) {
               newArray.push(x)
                    }
           }
         }
       }
     }

     if (shallow === undefined) {
       flat(array)
     } else if (shallow) {
       flatWithShallow(array)
     }

     return newArray

   },

   keys: function(object) {
     keys = []
     for (const key in object) {
       keys.push(key)
     }
     return keys
   },

   values: function(object) {
     values = []
     for (const key in object) {
       values.push(object[key])
     }
     return values
   },

   functions: function(object) {
     functionArray =[]
     for (const key in object) {
       if (typeof object[key] === 'function') {
         functionArray.push(key)
       }
     }
     return functionArray.sort()
   }

 }
})()

fi.libraryMethod()
