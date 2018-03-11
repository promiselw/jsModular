
define(function(require,exports,module) {

  var bookName = 'Vue.js学习指南';

  function getBookname() {
    console.log('this book name is '+bookName);
  }

  exports.getBookname = getBookname;

})