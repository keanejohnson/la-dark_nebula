exports = (typeof window === 'undefined') ? global : window;

exports.stringsAnswers = {

  reduceString : function(str, amount) {
    var count = 0;
    var newStr = '';

    for (var i = 0; i < str.length; i++) {
      if (str[i] == str[i+1]) {
        count += 1;
        if (count < amount) {
          newStr += str[i];
        }
      } else {
        count = 0;
        newStr += str[i];
      }
    };
    return newStr;
  },

  wordWrap: function(str, cols) {

  },

  reverseString: function(str) {
    return str.split("").reverse().join("");
  }
};
