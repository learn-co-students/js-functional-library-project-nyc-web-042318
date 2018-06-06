fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(collection, iteratee) {
      for (const i in collection) {
      iteratee(collection[i])
      }
      return collection
    },

    map: function(collection, iteratee) {
      let newArray = Array.from(collection)
      for (const i in collection) {
      newArray.push(iteratee(collection[i]))
      }
      return newArray
    },

    reduce: function(collection, iteratee, acc) {
      for (const i in collection) {
        iteratee(acc += collection[i])
      }
      return acc
    },

    functions: function(object) {
      let newArray = []
      for (const i in object) {
        if (typeof(object[i]) ==='function'){
        newArray.push(i)
        }
      }
      return newArray
    },

    find: function(collection, predicate) {
      for (const i in collection) {
        if (predicate(collection[i]) === true){
        return collection[i]
        }
      }
    },

    size: function(collection) {
      counter = 0
      for (const i in collection) {
        counter++
      }
      return counter
    },

    first: function(array, n) {
      if (typeof(n) === 'undefined') {
        return array[0]
      }
      counter = 1
      let newArray = []
      for (const i in array) {
        if (counter <= n) {
          newArray.push(array[i])
        }
        counter++
      }
      return newArray
    },

    last: function(array, n) {
      if (typeof(n) === 'undefined'){
        return array[array.length-1]
      }
      counter = 1
      let newArray = []
      for (const i in array) {
        if (counter > (array.length-n)) {
          newArray.push(array[i])
        }
        counter++
      }
      return newArray
    },

    compact: function(array){
      let newArray = []
      for (const i in array){
        if (!!array[i]) {
          newArray.push(array[i])
        }
      }
      // array.filter(f => !!f)
      return newArray
    },
    sortBy: function(array, iteratee){
      let newArray = Array.from(array)
      newArray.sort(iteratee(a,b){return (a-b)})
      return newArray
    }

  }
})()

fi.libraryMethod()
