fi = (function () {
  return {
    libraryMethod: function () {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function (arr, func) {
      if (Array.isArray(arr)) {
        for (const element of arr) {
          func(element, arr.indexOf(element), arr)
        }
      } else {
        for (const key in arr) {
          func(arr[key], key, arr)
        }
      }
      return arr
    },

    map: function (arr, func) {
      let newArr = []
      if (Array.isArray(arr)) {
        for (const element of arr) {
          newArr.push(func(element, arr.indexOf(element), arr))
        }
      } else {
        for (const key in arr) {
          newArr.push(func(arr[key], key, arr))
        }
      }
      return newArr
    },

    reduce: function (arr, func, acc) {
      // isNaN(acc) ? acc = 0 : false
      // var total = 0;
      if (Array.isArray(arr)) {
        const newArr = Array.from(arr)
        if (!acc) {
          acc = newArr.shift()
        }
        for (const element of newArr) {
          acc = func(acc, element, newArr)
        }
      }
      return acc
    },
    find: function (arr, func) {
      for (const element of arr) {
        if (func(element) === true) {
          return element
        }
      }
    },

    filter: function (arr, func) {
      let newArr = []

      for (const element of arr) {
        if (func(element) === true) {
          newArr.push(element)
        }
      }
      return newArr
    },

    size: function (arr) {
      let i = 0
      if (Array.isArray(arr)) {
        for (const element of arr) {
          i++
        }
      } else {
        for (const element in arr) {
          i++
        }
      }
      return i
    },
    first: function (arr, n) {
      let newArr = []
      if (!n) {
        return arr[0]
      }
      for (let i = 0; i < n; i++) {
        newArr.push(arr[i])
      }

      return newArr
    },

    last: function (arr, n) {
      let newArr = []
      let index
      if (!n) {
        const duplicate = Array.from(arr)
        return duplicate.pop()
      }
      index = arr.length
      for (let i = 0; i != n; i++) {
        index--
        newArr.unshift(arr[index])
      }
      return newArr
    },

    compact: function (arr) {
      let newArr = []
      for (element of arr) {
        element ? newArr.push(element) : false
      }
      return newArr
    },

    sortBy: function (arr, func) {
      let retArr = []
      for (let elem of arr) {
        retArr.push(func(elem))
      }
      return retArr.sort(function (a, b) {
        return a - b
 })
    },

    flatten: function (arr, result = []) {
      for (let i = 0, length = arr.length; i < length; i++) {
        const value = arr[i]
          if (Array.isArray(value)) {
          flatten(value, result)
          } else {
          result.push(value)
          }
      }
      return result
    x},

    uniq: function (arr, boolSorted, func) {

    },

    keys: function (obj) {

    },

    values: function (obj) {

    },

    functions: function (obj) {

    }
  }
})()

fi.libraryMethod()
