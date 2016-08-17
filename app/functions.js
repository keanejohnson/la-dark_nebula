exports = (typeof window === 'undefined') ? global : window;

exports.functionsAnswers = {
  isPrime : function(num) {
    for (var i = 2; i < num; i++){
      if (num % i === 0){
        return false;
      }
      else{
        return true;
      }
    }
  },

  arraySum : function(array) {
    var sum = 0;
    for (var i = 0; i < array.length; i++){
      sum += array[i];
    }
    return sum;
  },

  fizzBuzz : function(num) {
    if (typeof num === "number"){
      if (num % 15 === 0){
        return "fizzbuzz";
      } else if (num % 5 === 0){
        return "buzz";
      } else if (num % 3 === 0){
        return "fizz";
      } else {
        return num;
      }
    } else {
      return false;
    };
  }
};
