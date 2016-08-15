exports = (typeof window === 'undefined') ? global : window;

exports.arraysAnswers = {

  removeWithoutCopy : function(arr, item) {
    for (var i = 0; i < arr.length; i++) {
      if (arr[i] == item){
        arr.splice(i, item)
      };
    };
    return arr;
  },

  append : function(arr, item) {
    arr.push(item);
    return arr;
  },

  truncate : function(arr) {
    arr.splice(-1, 1);
    return arr;
  },

  prepend : function(arr, item) {
    arr.unshift(item);
    return arr;
  },

  curtail : function(arr) {
    arr.shift();
    return arr;
  },

  concat : function(arr1, arr2) {
    var arr3 = arr1.concat(arr2)
    return arr3;
  },

  insert : function(arr, item, index) {
    arr.splice(index, 0, item);
    return arr;
  },

  count : function(arr, item) {
    var count = 0
    for (var i = 0; i < arr.length; i++){
      if (arr[i] == item) {
        count += 1
      };
    };
    return count;
  },

  duplicates : function(arr) {
    var sortedArr = arr.sort();
    var duplicates = []
    for (var i = 0; i < sortedArr.length; i++){
      if (sortedArr[i] == sortedArr[i+1] && !duplicates.includes(sortedArr[i])){
        duplicates.push(sortedArr[i]);
      };
    };
    return duplicates;
  },

  square : function(arr) {
    var squaresArr = []
    for (var i = 0; i < arr.length; i++){
      squaresArr.push(arr[i]*arr[i]);
    };
    return squaresArr;
  },

  findAllOccurrences : function(arr, target) {
    var indices = []
    for (var i =0; i < arr.length; i++){
      if (arr[i] == target){
        indices.push(i)
      };
    };
    return indices;
  }
};
